import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import { useState } from "react";
import PlatformiconList from "./PlatformiconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import noImage from "../assets/no-image-placeholder.webp";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const [imageSrc, setImageSrc] = useState(
    getCroppedImageUrl(game.background_image)
  );

  return (
    <Card borderRadius="10px" overflow="hidden">
      <Image src={imageSrc} onError={() => setImageSrc(noImage)} />

      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformiconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>

        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;