import React, { Suspense } from "react";

export const App1Container = () => {
  console.log('HHHHHHHHH')
  const App1 = React.lazy(() => import("./App1"));

  return (
    <Suspense fallback="Loading App1...">
      <App1 />
    </Suspense>
  )
}