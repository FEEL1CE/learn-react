import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

const App = () => {
  const [data, setData] = useState("");
  const traceButton = () => {
    setData("Hello World");
  };

  return (
    <div>
      <Header list={["Home", "About", "Contact"]} title="React Basic"  />
      <Content content="Hello World" data={data.name} />
      <Footer />
      <p>{data}</p>
      <button onClick={() => traceButton()}>Click Me</button>
    </div>
  );
};

const data = {
  name: "John",
  age: 30,
  sekolah: {
    nama: "SMK Telkom Malang",
    jurusan: "Rekayasa Perangkat Lunak",
  },
};
const {
  name,
  age,
  alamat,
  sekolah: { nama: namaSekolah },
} = data;

console.log(name, age, namaSekolah);
export default App;
