import ConverterForm from "./component/ConverterForm";

function App() {
  return (
    <div
      className="w-screen h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/36878669/pexels-photo-36878669.png')`,
      }}
    >
      <div className="w-full">
        <div className=" w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/10  ">
          <ConverterForm />
        </div>
      </div>
    </div>
  );
}

export default App;
