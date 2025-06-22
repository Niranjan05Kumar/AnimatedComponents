import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MyAccordian = () => {
  const questions = [
    {
      question: "What is React?",
      answer:
        "React is a JavaScript library for building user interfaces, maintained by Facebook.",
    },
    {
      question: "What is a component in React?",
      answer:
        "A component is a reusable piece of UI that can have its own state and logic.",
    },
    {
      question: "How do you manage state in React?",
      answer:
        "State in React can be managed using the useState hook or state management libraries like Redux.",
    },
    {
      question: "What is a prop in React?",
      answer:
        "Props are inputs to components that allow data to be passed from parent to child components.",
    },
    {
      question: "What is the virtual DOM?",
      answer:
        "The virtual DOM is a lightweight copy of the real DOM that React uses to optimize UI updates.",
    },
  ];

  return (
    <Accordion
      type="single"
      collapsible
      className="mb-15 w-[70vw] select-none"
    >
      {questions.map((data, index) => (
        <AccordionItem value={`item-${index + 1}`} key={index}>
          <AccordionTrigger>{data.question}</AccordionTrigger>
          <AccordionContent>{data.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default MyAccordian;
