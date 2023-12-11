import "./App.css";
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";

function App() {
  const birthDate = new Date("190-01-01");
  return (
    <div>
      <h2>IdCards</h2>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={180}
        birth={birthDate}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Obrien"
        firstName="Delores"
        gender="female"
        height={150}
        birth={birthDate}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <div>
        <h2>Greetings</h2>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>
    </div>
  );
}

export default App;
