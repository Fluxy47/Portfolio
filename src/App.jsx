import { AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import Home from "./Pages/Home";
import { throttle } from "lodash";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NavBar from "./Components/NavBar";
import SecondNav from "./Components/SecondNav";
import Loader from "./Components/Loader";
import Cursor from "./Components/Cursor";

const fragments = ["Home", "Projects", "About-Me", "Contact-Me"];


function App() {
  const [navAnimate, setNavAnimate] = useState(false);
  const [currentFragment, setCurrentFragment] = useState("");
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [renderingInProgress, setRenderingInProgress] = useState(false);
  const [processingScroll, setProcessingScroll] = useState(false);
  const [visitedFragments, setVisitedFragments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [ButtonClicked, setButtonClicked] = useState(false);


//set the intitial fragment 
  useEffect(() => {
    if (!window.location.hash) {
      window.location.hash = "Home";
    }
  }, []);


  const handleNavigation = (page) => {
    const currentIndex = fragments.indexOf(page);
    setButtonClicked(false);

    if (currentIndex !== -1) {
      const previousFragments = fragments.slice(0, currentIndex + 1);
      const newVisitedFragments = Array.from(
        new Set([...visitedFragments, ...previousFragments])
      );
      setVisitedFragments(newVisitedFragments);
    }

    window.location.hash = page;
    setCurrentFragment(page);
    setTimeout(() => {
      setNavAnimate(false);
    }, 1500);
  };

  const shouldAnimate = () => {
    setNavAnimate((prevstate) => !prevstate);
    setButtonClicked((prevstate) => !prevstate);
  };

 

  // const INITIAL_FRAGMENT = "Home";

  
// scroll | button keys navigation
  const handleWheel = throttle(
    (event) => {
      if (navAnimate || processingScroll) return;
      setProcessingScroll(true);

      if (!renderingInProgress) {
        let scrollDirection = "";

      scrollDirection = handleDirection(event);

        if (scrollDirection !== "") {
          navigateFragments(
            scrollDirection,
          
          );
          setRenderingInProgress(true);
        }
      }

      setTimeout(() => {
        setProcessingScroll(false);
      }, 3000);
    },
    3000,
    { leading: true, trailing: false }
  );

  //calc direction of navigation
  const handleDirection = (event) => {
    if ("deltaY" in event) {
      // Scroll wheel event
      return event.deltaY > 0 ? "down" : "up";
    } else if (event.key) {
      // Keyboard event
      if (event.key === "ArrowUp") {
        return "up";
      } else if (event.key === "ArrowDown") {
        return "down";
      }
    }
    return "";
  };

//sets the next fragment for navigation
  function navigateFragments(scrollDirection) {
    let newIndex;

    if (scrollDirection === "down") {
      const currentIndex = fragments.indexOf(currentFragment);
      newIndex = Math.min(currentIndex + 1, fragments.length - 1);
    } else if (scrollDirection === "up") {
      const currentIndex = fragments.indexOf(currentFragment);
      newIndex = Math.max(currentIndex - 1, 0);
    }

    if (newIndex !== undefined) {
      const newFragment = fragments[newIndex];
      setCurrentFragment(newFragment);
      window.location.hash = newFragment;
    }
  }

  // Variables to store initial touch position
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientY); // Use clientY to get the initial vertical position
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientY); // Use clientY for vertical position

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isUpSwipe = distance > minSwipeDistance;
    const isDownSwipe = distance < -minSwipeDistance;

    if (isUpSwipe || isDownSwipe) {
      const scrollDirection = isUpSwipe ? "down" : "up";
      navigateFragments(
        scrollDirection,
        
      );
    }
  };

  // Add an event listener to track keyboard input
  window.addEventListener("keydown", function (event) {
    handleWheel(event);
  });

  // Add an event listener to track scroll wheel input
  window.addEventListener("wheel", function (event) {
    handleWheel(event);
  });

  useEffect(() => {
    if (renderingInProgress) {
      setTimeout(() => {
        setRenderingInProgress(false);
      }, 940);
    }
  }, [renderingInProgress]);

  useEffect(() => {
    const handleFragmentChange = () => {
      const fragment = window.location.hash.substr(1); // Get the URL fragment without the '#'
       setCurrentFragment(fragment);

      const currentIndex = visitedFragments.indexOf(fragment);
      const index = fragments.indexOf(currentFragment);

      if (index > 0) {
        const prevFragIndex = index - 1;

        if (
          prevFragIndex !== -1 &&
          !visitedFragments.includes(fragments[prevFragIndex])
        ) {
          // The fragment is not yet visited
          setVisitedFragments((prevVisitedFragments) => [
            ...prevVisitedFragments,
            fragments[prevFragIndex],
          ]);
        }
      } else if (currentIndex < visitedFragments.length - 1) {
        // Navigating backward from a later index
        const updatedVisitedFragments = visitedFragments.slice(
          0,
          currentIndex + 1
        );
        setVisitedFragments(updatedVisitedFragments);
      }
    };

    const isFirstLoad = () => {
      return !localStorage.getItem("hasLoaded");
    };

    window.addEventListener("hashchange", handleFragmentChange);

    if (isFirstLoad()) {
      localStorage.setItem("hasLoaded", "true"); // Store the information that the app has loaded once
    } else {
        handleFragmentChange(); // Handle fragment changes for subsequent loads
    }
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("hashchange", handleFragmentChange);
    };
  }, [visitedFragments, fragments, currentFragment]);

  useEffect(() => {
    let loadingTimeout;

    if (isLoading) {
      loadingTimeout = setTimeout(() => {
        setIsLoading(false);
      }, 2500); // Adjust the duration as needed
    }

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, [isLoading]);

  return (
    <div
      className=" h-screen  overflow-hidden"
      onWheel={handleWheel}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <Cursor />
      <AnimatePresence mode="wait">{isLoading && <Loader />}</AnimatePresence>
      <div id="your-container-class" className="your-container-class">
        <NavBar shouldAnimate={shouldAnimate} ButtonClicked={ButtonClicked} />
        <AnimatePresence mode="wait">
          {navAnimate && <SecondNav handleNavigation={handleNavigation} />}
        </AnimatePresence>
        <Home
          currentFragment={currentFragment}
          visitedFragments={visitedFragments.includes("Home")}
        />

        <Projects
          currentFragment={currentFragment}
          visitedFragments={visitedFragments.includes("Projects")}
        />

        <About
          currentFragment={currentFragment}
          visitedFragments={visitedFragments.includes("About-Me")}
        />

        <Contact
          currentFragment={currentFragment}
          visitedFragments={visitedFragments.includes("Contact-Me")}
        />
      </div>
    </div>
  );
}

export default App;
