export default function Content({ content, data }) {
  return (
    <div>
      <p>Page ini adalah {content}</p>
      <button onClick={() => confirm("Hello World")}>Click Me</button>
      <p>{data}</p>
    </div>
  );
}
