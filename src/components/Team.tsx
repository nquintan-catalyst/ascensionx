import Thing from "./Thing";

const Team: React.FC = () => {
    return(
    <>
        <h1>Team</h1>
        <Thing media={[
            {
              name: "Dr. Muni Venkateswarlu Kumaramangalam, PhD",
              key: 1,
              desc: "Muni has a PhD in Computer Science and has extensive experience in research and development, as well as a strong background in blockchain technologies and smart contract development. He has previously worked on multiple blockchain projects with the University of Calgary and the University of Quebec at Chicoutimi. Currently, Muni is working on passion projects that address the issue of making cryptocurrency environmentally friendly, such as working with carbon credits, and assisting in the development of the Ascension Ecoverse game."
            },
            {
              name: "Nidal Ghonaim",
              key: 2,
              desc: "Nidal is a jack-of-all-trades designer with experience in game design, web design, UX/UI design, and 3D modelling. He graduated with a Bachelor of Business Administration from Cardiff Metropolitan University in 2021 but has always been passionate about the technical side of business. As a result, Nidal has been freelancing as a designer for the past 2+ years, leading him to the world of cryptocurrency and the Ascension Ecoverse game."
            },
            {
              name: "Patrick Dean",
              key: 3,
              desc: "Patrick is a second-year university student currently working towards completing his Bachelor of Business Administration at Wilfrid Laurier University. He has a passion for all things cryptocurrency, UX/UI, and digital marketing, having assisted with previous cryptocurrency projects and most recently gaining in the world of educational technology at Pencil Learning Technologies. Currently, Patrick is taking on this founding role to dive deeper into the world of cryptocurrency and explore the opportunities that it can provide regarding environmental benefits."
            },
          ]}/>
        {/*<h3>Dr. Muni Venkateswarlu Kumaramangalam, PhD</h3>
        <p>
          Muni has a PhD in Computer Science and has extensive experience in
          research and development, as well as a strong background in blockchain
          technologies and smart contract development. He has previously worked
          on multiple blockchain projects with the University of Calgary and the
          University of Quebec at Chicoutimi. Currently, Muni is working on
          passion projects that address the issue of making cryptocurrency
          environmentally friendly, such as working with carbon credits, and
          assisting in the development of the Ascension Ecoverse game.
        </p>
        <h3>Nidal Ghonaim</h3>
        <p>
          Nidal is a jack-of-all-trades designer with experience in game design,
          web design, UX/UI design, and 3D modelling. He graduated with a
          Bachelor of Business Administration from Cardiff Metropolitan
          University in 2021 but has always been passionate about the technical
          side of business. As a result, Nidal has been freelancing as a
          designer for the past 2+ years, leading him to the world of
          cryptocurrency and the Ascension Ecoverse game.
        </p>
        <h3>Patrick Dean</h3>
        <p>
          Patrick is a second-year university student currently working towards
          completing his Bachelor of Business Administration at Wilfrid Laurier
          University. He has a passion for all things cryptocurrency, UX/UI, and
          digital marketing, having assisted with previous cryptocurrency
          projects and most recently gaining in the world of educational
          technology at Pencil Learning Technologies. Currently, Patrick is
          taking on this founding role to dive deeper into the world of
          cryptocurrency and explore the opportunities that it can provide
          regarding environmental benefits.
        </p>*/}
    </>
    );
};

export default Team;