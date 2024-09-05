import Sala from "@/components/Sala";
import { CursoProvider } from "@/context/CursoContext";


export default function Home() {
  return (
    <div>
      <CursoProvider>

        <Sala />
      </CursoProvider>
    </div>
  );
}
