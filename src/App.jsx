import "./App.css";
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import CreditCard from "./components/CreditCard";
import BoxColor from "./components/BoxColor";
import DriverCard from "./components/DriverCard";

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
      <div>
        <h2>Random</h2>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>
      <div>
        <h2>CreditCard</h2>
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>
      <div>
        <h2>DriverCrad</h2>
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE",
          }}
        />

        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: "Audi A3",
            licensePlate: "BE33ER",
          }}
        />
      </div>
      <div>
        <h2>BoxColor</h2>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={200} b={0} />
      </div>
    </div>
  );
}

export default App;
