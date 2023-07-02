import { StackCards, StackSection } from "@/pages/home/style";
import { Text } from "@/styles/Text";
import { Stack } from "../Stack";
import { stackData } from "@/utils/stackData";

export const Techs = () => {
  return (

      <StackSection >
        <Text as="h1" type="heading1" color="grey5"> 
            Tecnologias
        </Text>
        <Text type="body1" color="grey2">
            Abaixo, algumas das tecnologias que utilizo em meus projetos
        </Text>

        <StackCards>
            {stackData.map((stack, index) => (
            <Stack key={index} title={stack.title} icon={stack.img} />
            ))}
        </StackCards>
      </StackSection>

  );
};
