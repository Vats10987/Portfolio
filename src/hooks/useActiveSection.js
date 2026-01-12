// import { useEffect, useState } from 'react';

// const useActiveSection = (sections) => {
//   const [activeSection, setActiveSection] = useState('home');

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           setActiveSection(entry.target.id);
//         }
//       });
//     }, { 
//       threshold: 0.3,
//       rootMargin: '-20% 0px -20% 0px'
//     });

//     sections.forEach(section => {
//       if (section) {
//         observer.observe(section);
//       }
//     });

//     return () => {
//       sections.forEach(section => {
//         if (section) {
//           observer.unobserve(section);
//         }
//       });
//     };
//   }, [sections]);

//   return activeSection;
// };

// export default useActiveSection;

import { useEffect, useState } from 'react';

const useActiveSection = (sections) => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { 
      threshold: 0.3,
      rootMargin: '-20% 0px -20% 0px'
    });

    sections.forEach(section => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach(section => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [sections]);

  return activeSection;
};

export default useActiveSection;