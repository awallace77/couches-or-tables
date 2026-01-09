function App() {
  return (
    <>
      <div className="p-5 bg-(--coolor-black) flex flex-col justify-center align-middle items-center w-full h-screen">
        <div className="couches-or-tables w-full h-auto text-center text-2xl">
          <a
            href="https://maps.app.goo.gl/wCKs8H2jAtgGdr9W7"
            className="text-(--coolor-blue) underline uppercase"
          >
            Couches
          </a>{" "}
          or{" "}
          <a
            href="https://maps.app.goo.gl/W2hcsimYNdsdANwS7"
            className="text-(--coolor-blue) underline uppercase"
          >
            Tables
          </a>
          ?
        </div>
      </div>
    </>
  );
}

export default App;
