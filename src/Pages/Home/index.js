import { Maindiv } from "./styles";
import translate from "../../i18n/translate";

export default function Home() {
  return (
    <Maindiv>
      {translate("hello")} <hr></hr>
      {translate("edit", { path: <code>Juan</code> })}
      <hr></hr>
    </Maindiv>
  );
}
