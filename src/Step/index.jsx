import React from "react";
import { Step as RawStep } from "react-presents";
import { Route } from "react-router-dom";

const Step = ({ step, iterate, children, index, ...props }) => {
  if (typeof index === "string" && typeof index === "number")
    return <RawStep {...props} index={index} children={children} />;

  let minStep = 0;
  let maxStep = 0;
  if (typeof step === "number") {
    [minStep, maxStep] = [step, step];
  } else if (/^[0-9]+$/.test(step)) {
    const parsedStep = parseInt(step);
    [minStep, maxStep] = [parsedStep, parsedStep];
  } else if (/^[0-9]*\-[0-9]*$/.test(step)) {
    [minStep, maxStep] = step.split("-").map((n) => parseInt(n));
    if (!minStep) minStep = 0;
    if (!maxStep) maxStep = Number.POSITIVE_INFINITY;
  }

  if (iterate && (maxStep === 0 || maxStep === Number.POSITIVE_INFINITY)) {
    maxStep = minStep + React.Children.count(children) - 1;
  }

  const childrenAsArray = iterate && React.Children.toArray(children);

  return (
    <>
      <RawStep index={minStep} maxIndex={maxStep} children="" />

      <Route
        path={`/(.*)/:n`}
        render={({ match }) => {
          const n = parseInt(match.params.n);
          if (n < minStep || n > maxStep) return null;

          if (iterate) return childrenAsArray[n - minStep] || null;
          if (typeof children === "function") return children(n);
          return children;
        }}
      />
    </>
  );
};

export default Step;
