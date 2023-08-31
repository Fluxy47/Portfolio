import { AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import Home from "./Pages/Home";
import { first, throttle } from "lodash";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NavBar from "./Components/NavBar";
import SecondNav from "./Components/SecondNav";
import Testing from "./Components/Testing";
import Loader from "./Components/Loader";

function App() {
  const [currentFragment, setCurrentFragment] = useState("");
  const [renderingInProgress, setRenderingInProgress] = useState(false);
  const [processingScroll, setProcessingScroll] = useState(false);
  const [visitedFragments, setVisitedFragments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [ButtonClicked, setButtonClicked] = useState(false);
  console.log("visited", visitedFragments);
  const [navAnimate, setNavAnimate] = useState(false);

  const handleNavigation = (page) => {
    const currentIndex = fragments.indexOf(page);

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
    }, 1000);
  };

  const shouldNotAnimate = () => {
    setNavAnimate(false);
    setButtonClicked(false);
  };
  const shouldAnimate = () => {
    setNavAnimate(true);
    setButtonClicked(true);
  };

  const fragments = useMemo(
    () => ["Home", "Projects", "About-Me", "Contact-Me"],
    []
  );

  const INITIAL_FRAGMENT = "Home";

  const handleWheel = throttle(
    (event) => {
      if (navAnimate) return;
      if (processingScroll) return;
      setProcessingScroll(true);

      if (!renderingInProgress) {
        let scrollDirection = "";

        if ("deltaY" in event) {
          // Scroll wheel event
          scrollDirection = event.deltaY > 0 ? "down" : "up";
        } else if (event.touches) {
          // Touch event
          const touchEndY = event.touches[0].clientY;
          scrollDirection = touchEndY > touchStartY ? "down" : "up";
        } else if (event.key) {
          // Keyboard event
          if (event.key === "ArrowUp") {
            scrollDirection = "up";
          } else if (event.key === "ArrowDown") {
            scrollDirection = "down";
          }
        }

        if (scrollDirection === "down") {
          const currentIndex = fragments.indexOf(currentFragment);
          const newIndex = Math.min(currentIndex + 1, fragments.length - 1);
          const newFragment = fragments[newIndex];
          setCurrentFragment(newFragment);
          window.location.hash = newFragment;
        } else if (scrollDirection === "up") {
          const currentIndex = fragments.indexOf(currentFragment);
          const newIndex = Math.max(currentIndex - 1, 0);
          const newFragment = fragments[newIndex];
          setCurrentFragment(newFragment);
          window.location.hash = newFragment;
        }

        setRenderingInProgress(true);
      }

      setTimeout(() => {
        setProcessingScroll(false);
      }, 3000);
    },
    3000,
    { leading: true, trailing: false }
  );

  // Variables to store initial touch position
  let touchStartY = 0;

  // Add an event listener to track touch start
  window.addEventListener("touchstart", function (event) {
    touchStartY = event.touches[0].clientY;
  });

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
      const initialFragment = INITIAL_FRAGMENT;
      setCurrentFragment(initialFragment);
      window.location.hash = initialFragment;
      setVisitedFragments([initialFragment]);
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
    const handleBeforeUnload = () => {
      setIsLoading(true);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

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
    <div className=" h-screen  overflow-hidden" onWheel={handleWheel}>
      <AnimatePresence mode="wait">{isLoading && <Loader />}</AnimatePresence>
      <NavBar
        shouldAnimate={shouldAnimate}
        shouldNotAnimate={shouldNotAnimate}
        ButtonClicked={ButtonClicked}
      />
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
      {/*
      <Testing
        currentFragment={currentFragment}
        visitedFragments={visitedFragments.includes("Testing")}
      /> */}
    </div>
  );
}

export default App;
