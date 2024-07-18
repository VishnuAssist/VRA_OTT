import { MatxSuspense } from "..";
import useSettings from "../../hooks/useSettings";
import { MatxLayouts } from "./index";

export default function MatxLayout(props:any) {
  const { settings } = useSettings();
  const Layout = MatxLayouts[settings.activeLayout];

  return (
    <MatxSuspense>
      <Layout {...props} />
    </MatxSuspense>
  );
}
