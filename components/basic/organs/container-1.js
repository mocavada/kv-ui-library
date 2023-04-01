
'use client';

import * as React from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Container1({children, bgcolor}) {
  return (
     <React.Fragment>
      <CssBaseline />
      <Container maxWidth="m">
        <Box sx={{ bgcolor: {bgcolor}, height: "100vh" }} />
        {children}
      </Container>
      </React.Fragment>
  );
}

Container1.defaultProps = {
  bgcolor: "#cfe8fc",
};


// interface Props {
//   children: ReactNode;
// }

// export default function Container1({ children }: Props): JSX.Element {
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <Container maxWidth="m">
//         <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
//         {children}
//       </Container>
//     </React.Fragment>
//   );
// }


// In this example, we define a functional component Container1 that takes in a single prop children of type ReactNode. We use ReactNode to allow any valid React children to be passed in as props, such as JSX elements or text nodes.
// By specifying the return type of the function as JSX.Element, we ensure that the function returns a valid JSX element.