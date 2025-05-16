import { Banknote, Package, Headset, Clock, Shield, Zap, Award, MapPin, Building, ExternalLink } from "lucide-react";
import ShaderLogo from "@/components/ShaderLogo";

// Импорт фото счастливого курьера
import manImage from "/images/man3.webp";
import manImageFallback from "/images/man3.png";

export default function Benefits() {
  // Дополнительные преимущества (компактная версия, без "Карьера")
  const additionalBenefits = [
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: "Гибкий график",
      description: "Работай когда удобно — утром, днем или вечером"
    },
    {
      icon: <Shield className="h-5 w-5 text-secondary" />,
      title: "Стабильно",
      description: "Выплаты 3 раза в неделю без задержек"
    },
    {
      icon: <Award className="h-5 w-5 text-primary" />,
      title: "Бонусы",
      description: "Дополнительные бонусы за выполненные заказы"
    }
  ];

  return (
    <section id="benefits" className="py-16">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-primary/10 text-sm text-primary font-medium">
            Преимущества работы у нас
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Почему курьеры выбирают <span className="gradient-text inline-flex items-center gap-2">
              <ShaderLogo width="35px" height="35px" /> ЮНИК
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Мы создаем технологичные и комфортные условия для наших курьеров
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Левый блок - преимущества */}
          <div className="md:w-2/3">
            <div className="flex flex-col md:flex-row gap-6 bg-white/10 backdrop-blur-sm p-4 rounded-xl h-full">
              {/* Левая колонка - фото курьера */}
              <div className="md:w-1/2 relative">
                <div className="rounded-xl overflow-hidden shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-shadow duration-300">
                  <picture>
                    <source srcSet={manImage} type="image/webp" />
                    <source srcSet={manImageFallback} type="image/png" />
                    <img
                      src={manImageFallback}
                      alt="Счастливый курьер с доставкой"
                      className="w-full h-auto object-cover"
                      loading="eager"
                    />
                  </picture>
                </div>
              </div>

              {/* Правая колонка - плюсы/преимущества */}
              <div className="md:w-1/2">
                <div className="space-y-4">
                  {additionalBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-primary/10 hover:bg-white/80 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          {benefit.icon}
                        </div>
                        <div>
                          <h4 className="font-bold">{benefit.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Кнопка действия */}
                  <div className="mt-4 text-center">
                    <a href="#apply" className="inline-flex items-center font-medium text-white bg-primary hover:bg-primary/90 px-6 py-2.5 rounded-lg transition-colors">
                      Присоединиться к команде
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Правый блок - "Где нас найти" */}
          <div className="md:w-1/3">
            <div className="glass-card p-6 rounded-xl h-full border border-primary/10 bg-white/10 backdrop-blur-sm shadow-lg relative flex flex-col">
              <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-secondary/10 via-transparent to-primary/5 rounded-xl blur-sm"></div>

              <h3 className="font-bold text-xl mb-6 flex items-center gap-2 font-heading">
                <MapPin className="h-5 w-5 text-primary" />
                Где нас найти
              </h3>

              <div className="space-y-5 flex-grow">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Наш офис</h4>
                    <p className="text-muted-foreground">
                      г. Минск,<br />
                      ул. Игнатенко 7,<br />
                      2 этаж
                    </p>
                  </div>
                </div>

                <div className="h-[1px] bg-primary/10 w-full my-3"></div>


              </div>

              <div className="mt-auto pt-4 flex justify-between items-center">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span>Минск, Беларусь</span>
                </div>
                <div className="flex gap-3 items-center">
                  <a
                    href="https://yandex.ru/maps/?text=минск+игнатенко+7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-primary font-medium hover:underline"
                  >
                    Яндекс Карты <ExternalLink className="h-3 w-3" />
                  </a>
                  <a
                    href="https://maps.google.com/?q=минск+игнатенко+7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-primary font-medium hover:underline"
                  >
                    Google Maps <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
