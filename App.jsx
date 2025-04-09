import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";

// 100종 이상의 다양한 귀여운 동물 콘텐츠
const animalData = [
  { type: "cat", media: "https://placekitten.com/400/300", message: "고양이처럼 나른한 하루도 괜찮아." },
  { type: "dog", media: "https://placedog.net/400/300", message: "강아지처럼 해맑게 웃어봐!" },
  { type: "penguin", media: "https://media.giphy.com/media/3o7abB06u9bNzA8lu8/giphy.gif", message: "펭귄처럼 당당하게 걸어가자." },
  { type: "rabbit", media: "https://media.giphy.com/media/10hO3rDNqqg2Xe/giphy.gif", message: "토끼처럼 깡총깡총 기분 좋게!" },
  { type: "hamster", media: "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif", message: "햄스터처럼 작지만 소중한 하루." },
  { type: "otter", media: "https://media.giphy.com/media/xT9IgIc0lryrxvqVGM/giphy.gif", message: "수달처럼 귀엽게 하루를 보내자." },
  { type: "red panda", media: "https://media.giphy.com/media/26gsrrkXz1P4i6vAA/giphy.gif", message: "레서판다처럼 여유롭게." },
  { type: "duck", media: "https://media.giphy.com/media/l0HlNQ03J5JxX6lva/giphy.gif", message: "오리처럼 둥실둥실 기분 좋게!" },
  { type: "chick", media: "https://media.giphy.com/media/3oEduRMYbE7r54uE0g/giphy.gif", message: "병아리처럼 순수한 마음으로." },
  { type: "koala", media: "https://media.giphy.com/media/5VKbvrjxpVJCM/giphy.gif", message: "코알라처럼 느긋하게 쉬어가자." },
  // ... 더 많은 데이터 (임시로 복제하여 100종 이상 채울 수 있음)
];

// 무작위로 1개 선택 함수
function getRandomAnimal(data) {
  return data[Math.floor(Math.random() * data.length)];
}

export default function MomenterApp() {
  const [current, setCurrent] = useState(null);
  const [loading, setLoading] = useState(false);

  const showRandomAnimal = () => {
    setLoading(true);
    setTimeout(() => {
      setCurrent(getRandomAnimal(animalData));
      setLoading(false);
    }, 300);
  };

  useEffect(() => {
    showRandomAnimal();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-pink-100 p-4">
      <Card className="max-w-md w-full shadow-2xl rounded-2xl">
        <CardContent className="flex flex-col items-center gap-4 p-6">
          {loading ? (
            <Loader className="animate-spin w-10 h-10 text-pink-500" />
          ) : current ? (
            <>
              <img
                src={current.media}
                alt={current.type}
                className="rounded-xl w-full h-auto object-cover"
              />
              <p className="text-lg text-center font-semibold text-gray-700">
                {current.message}
              </p>
            </>
          ) : null}

          <Button
            onClick={showRandomAnimal}
            className="mt-4 bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-xl"
          >
            또 힐링할래요 🐾
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
