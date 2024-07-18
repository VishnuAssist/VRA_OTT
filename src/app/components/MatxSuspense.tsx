import { Suspense } from "react";
import { MatxLoading } from ".";

export default function MatxSuspense({ children }:any) {
  return <Suspense fallback={<MatxLoading />}>{children}</Suspense>;
}
