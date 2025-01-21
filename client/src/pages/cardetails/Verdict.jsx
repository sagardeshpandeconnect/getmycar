import { useSelector } from "react-redux";
import { Text } from "@chakra-ui/react";
import HeadingText from "@components/ui/HeadingText";

const Verdict = ({ data }) => {
  const { verdict, verdict_hindi } = data;

  const currentLang = useSelector((state) => state.entities.language);

  const verdictData = currentLang === "en" ? verdict : verdict_hindi;

  return (
    <>
      <HeadingText>{currentLang === "en" ? "verdict" : "निर्णय"}</HeadingText>
      <Text marginY={"2"}>{verdictData}</Text>
    </>
  );
};

export default Verdict;
