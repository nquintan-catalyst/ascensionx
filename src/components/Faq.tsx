import FaqAccordion from "./FaqAccordion";

const Faq: React.FC =() => {
  return(
    <div className="contentContainer--left">
      <div className="Faq">
          <h1>FAQs</h1>
          <FaqAccordion title="Question 1" content={filler} />
          <FaqAccordion title="Question 2" content={filler} />
          <FaqAccordion title="Question 3" content={filler} />
          <FaqAccordion title="Question 4" content={filler} />
          <FaqAccordion title="Question 5" content={filler} />
      </div>
    </div>
  );
};

const filler = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.";


export default Faq;