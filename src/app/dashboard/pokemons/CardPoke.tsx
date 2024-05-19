import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Pokemons {
  id: string;
  name: string;
  url: string;
}

interface Props {
  pokemons: Pokemons[];
}

const CardPoke: React.FC<Props> = ({ pokemons }) => {
  return (
    <>
      {pokemons.map((pok) => {
        return (
          <div className="flex" key={pok.id}>
          <Card className={"flex flex-col"}>
            <CardHeader>
              <CardTitle className="text-center">{pok.name}</CardTitle>
            </CardHeader>
            <CardContent className="gap-4">
                <div className="items-center justify-center flex flex-col w-auto h-auto">
                  <Image alt={pok.name} src={pok.url} width={80} height={80} priority={false} className="w-[80px] h-[80px]"/>
                  <Link href={`pokemon/${pok.id}`} className="underline">
                    Saber más
                  </Link>
                </div>
            </CardContent>
            <CardFooter>
              <div className="items-center justify-center flex">
              <Button className="w-auto" variant='outline'>
                <Heart className="mr-2 h-4 w-4 text-red-600"/> Marcar como favorito
              </Button>
              </div>
            </CardFooter>
          </Card>
          </div>
        );
      })}
    </>
  );
};

export default CardPoke;
