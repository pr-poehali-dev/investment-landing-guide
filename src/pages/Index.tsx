import React from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const steps = [
    {
      id: 1,
      icon: "Target",
      title: "Определите свои финансовые цели",
      summary: "Поставьте ясные и достижимые цели",
      description:
        "Перед началом инвестирования важно понять, зачем вы это делаете. Хотите накопить на пенсию, обучение детей, покупку недвижимости или просто создать финансовую подушку безопасности? Чёткие цели помогут выбрать правильную стратегию инвестирования и придерживаться её, несмотря на рыночные колебания.",
    },
    {
      id: 2,
      icon: "LineChart",
      title: "Разберитесь с долгами и создайте финансовую подушку",
      summary: "Погасите дорогие кредиты и отложите на экстренные расходы",
      description:
        "Прежде чем инвестировать, убедитесь, что у вас нет высокопроцентных долгов (например, по кредитным картам). Также важно иметь финансовую подушку безопасности – сумму, равную 3-6 месячным расходам, которая поможет вам в случае потери работы или других непредвиденных обстоятельств.",
    },
    {
      id: 3,
      icon: "GraduationCap",
      title: "Займитесь финансовым образованием",
      summary: "Изучите основы инвестиций и финансовых рынков",
      description:
        "Инвестирование требует базовых знаний. Изучите ключевые понятия: активы, диверсификация, доходность, риск, процентные ставки. Читайте книги, проходите онлайн-курсы, слушайте подкасты о личных финансах и инвестициях. Понимание основ поможет принимать обоснованные решения и избегать распространенных ошибок.",
    },
    {
      id: 4,
      icon: "UserSearch",
      title: "Определите свой риск-профиль",
      summary: "Оцените свою готовность к риску",
      description:
        "Каждый инвестор имеет свой уровень толерантности к риску. Он зависит от возраста, финансового положения, целей и психологических особенностей. Консервативные инвесторы предпочитают стабильные, но менее доходные инструменты, а агрессивные готовы рисковать ради потенциально высокой прибыли. Определите, какой подход ближе вам.",
    },
    {
      id: 5,
      icon: "Briefcase",
      title: "Выберите надежного брокера",
      summary: "Найдите лицензированного посредника с хорошей репутацией",
      description:
        "Для инвестирования на бирже вам понадобится брокер – посредник между вами и рынком. Выбирайте лицензированных брокеров с хорошей репутацией, прозрачной комиссионной политикой и удобной платформой. Обратите внимание на качество клиентской поддержки и образовательные материалы, которые предлагает брокер.",
    },
    {
      id: 6,
      icon: "Layers",
      title: "Создайте диверсифицированный портфель",
      summary: "Распределите капитал между разными активами",
      description:
        "Диверсификация – ключевой принцип инвестирования. Распределите свои вложения между различными классами активов (акции, облигации, недвижимость), отраслями и географическими регионами. Это поможет снизить риски: если один актив будет падать в цене, другие могут расти или оставаться стабильными.",
    },
    {
      id: 7,
      icon: "Clock",
      title: "Инвестируйте регулярно",
      summary: "Практикуйте стратегию усреднения затрат",
      description:
        "Регулярное инвестирование фиксированной суммы (например, ежемесячно) позволяет использовать стратегию усреднения затрат. Вы будете покупать больше активов, когда цены низкие, и меньше, когда высокие. Со временем это может привести к более низкой средней цене покупки и уменьшить влияние рыночной волатильности.",
    },
    {
      id: 8,
      icon: "ScrollText",
      title: "Ведите учет и анализируйте результаты",
      summary: "Отслеживайте эффективность своих инвестиций",
      description:
        "Регулярно проверяйте свой инвестиционный портфель и анализируйте его показатели. Отслеживайте, какие активы работают хорошо, а какие – нет, и понимайте, почему так происходит. Это поможет вам учиться на своем опыте и совершенствовать инвестиционную стратегию с течением времени.",
    },
    {
      id: 9,
      icon: "BookOpen",
      title: "Продолжайте обучение и адаптируйтесь",
      summary: "Развивайте свои знания и гибко реагируйте на изменения",
      description:
        "Финансовый мир постоянно меняется. Новые инструменты, стратегии и тенденции появляются регулярно. Продолжайте изучать тему инвестиций, следите за финансовыми новостями и будьте готовы адаптировать свою стратегию, когда это необходимо. Непрерывное обучение – залог долгосрочного успеха.",
    },
  ];

  const recommendedResources = [
    {
      type: "Книги",
      items: [
        { title: "Разумный инвестор", author: "Бенджамин Грэхем" },
        { title: "Богатый папа, бедный папа", author: "Роберт Кийосаки" },
        {
          title: "Маленькая книга победителя рынка акций",
          author: "Джоэл Гринблатт",
        },
      ],
    },
    {
      type: "Онлайн-курсы",
      items: [
        {
          title: "Основы инвестирования для начинающих",
          platform: "Инвестопедия",
        },
        { title: "Финансовая грамотность и инвестиции", platform: "Нетология" },
        { title: "Инвестиции для начинающих", platform: "Московская биржа" },
      ],
    },
    {
      type: "Брокеры",
      items: [
        {
          title: "Тинькофф Инвестиции",
          feature: "Удобное мобильное приложение",
        },
        { title: "ВТБ Мои Инвестиции", feature: "Низкие комиссии" },
        { title: "Сбер Инвестор", feature: "Интеграция с экосистемой банка" },
      ],
    },
  ];

  const faqs = [
    {
      question: "С какой суммы лучше начинать инвестировать?",
      answer:
        "Начинать можно с любой суммы, которую вы готовы регулярно откладывать. В современных условиях многие брокеры позволяют инвестировать от 1000 рублей. Главное – это регулярность вложений и длительный горизонт инвестирования.",
    },
    {
      question: "Какие инструменты подходят новичкам?",
      answer:
        "Для начинающих инвесторов хорошо подходят ETF (биржевые фонды), которые обеспечивают диверсификацию при минимальных вложениях. Также можно рассмотреть государственные облигации и акции крупных стабильных компаний.",
    },
    {
      question: "Как минимизировать риски при инвестировании?",
      answer:
        "Основные способы минимизации рисков: диверсификация портфеля, долгосрочный подход к инвестированию, регулярное пополнение портфеля и инвестирование только тех денег, которые вы готовы не трогать длительное время.",
    },
    {
      question: "Сколько времени нужно уделять инвестициям?",
      answer:
        "Для пассивного инвестирования достаточно несколько часов в месяц для мониторинга портфеля и возможных корректировок. Активная торговля может требовать нескольких часов ежедневно, но для начинающих она не рекомендуется.",
    },
    {
      question: "Что делать, если рынок падает?",
      answer:
        "Падения рынка – нормальная часть инвестиционного цикла. Если у вас долгосрочная стратегия и диверсифицированный портфель, лучше всего продолжать инвестировать регулярно и не паниковать. Исторически рынки всегда восстанавливались и росли в долгосрочной перспективе.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F6F7]">
      {/* Hero section */}
      <section className="relative bg-gradient-to-r from-[#F9C0DD] to-[#FFDBE9] text-[#8D224F] px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-rubik">
            Как начать инвестировать с нуля: полное руководство для начинающих
          </h1>
          <div className="text-lg md:text-xl max-w-3xl">
            <p className="mb-4">
              Инвестиции — это вложение денег сегодня с целью получить больше
              денег в будущем. Это один из ключевых инструментов для достижения
              финансовой свободы и обеспечения своего будущего.
            </p>
            <p className="mb-4">
              В современном мире, где инфляция постоянно обесценивает деньги, а
              пенсионные системы не всегда надежны, умение инвестировать
              становится не роскошью, а необходимостью для каждого.
            </p>
            <p>
              Это руководство создано для тех, кто только начинает свой путь в
              мире инвестиций и хочет построить прочный финансовый фундамент,
              избегая распространенных ошибок новичков.
            </p>
          </div>
        </div>
        <div className="hidden md:block absolute bottom-0 right-0 opacity-10">
          <Icon name="TrendingUp" size={300} />
        </div>
      </section>

      {/* Steps section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center font-rubik text-[#614B8D]">
            9 шагов к успешному инвестированию
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
              <Card
                key={step.id}
                className="shadow-md hover:shadow-lg transition-shadow"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#C1D9BC] text-[#2D644C]">
                      <Icon name={step.icon} size={22} />
                    </div>
                    <span className="font-medium text-[#2D644C]">
                      Шаг {step.id}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-rubik">
                    {step.title}
                  </CardTitle>
                  <CardDescription className="text-base font-medium">
                    {step.summary}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote section */}
      <section className="py-16 px-4 bg-[#F6F6F7]">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white p-8 md:p-10 rounded-lg shadow-md border-l-4 border-[#9B87F5] italic">
            <Icon
              name="Quote"
              size={48}
              className="absolute -top-5 -left-5 text-[#9B87F5] opacity-25"
            />
            <p className="text-lg md:text-xl mb-4">
              "Самые важные уроки в инвестировании на фондовом рынке не о том,
              как увеличить прибыль, а о том, как не допускать грубых ошибок.
              Если вы избегаете ошибок, прибыль придет сама собой."
            </p>
            <p className="text-right font-medium text-[#614B8D]">
              — Мартин Шварц, легендарный трейдер
            </p>
          </div>
        </div>
      </section>

      {/* Resources section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center font-rubik text-[#614B8D]">
            Полезные ресурсы для начинающих
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {recommendedResources.map((resource, index) => (
              <Card key={index} className="shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl font-rubik text-[#8D224F]">
                    {resource.type}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {resource.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="pb-2 border-b border-gray-100"
                      >
                        <p className="font-medium">{item.title}</p>
                        <p className="text-gray-600 text-sm">
                          {item.author || item.platform || item.feature}
                        </p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-16 px-4 bg-[#F0E5FA]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center font-rubik text-[#614B8D]">
            Популярные вопросы
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg md:text-xl font-medium mb-3 font-rubik text-[#8D224F]">
                  {faq.question}
                </h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#C1D9BC] to-[#D2E7CD] text-[#2D644C]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 font-rubik">
            Начните инвестировать уже сегодня!
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Даже небольшие регулярные инвестиции могут со временем привести к
            значительным результатам. Не откладывайте на завтра то, что может
            обеспечить вам финансовую независимость в будущем.
          </p>
          <Button
            size="lg"
            className="bg-white text-[#2D644C] hover:bg-gray-100 hover:text-[#2D644C]"
          >
            <Icon name="ArrowRight" className="mr-2" />
            Открыть брокерский счет
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#614B8D] text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <p className="mb-4">
              © 2025 Руководство для начинающих инвесторов. Информация
              представлена в образовательных целях.
            </p>
            <p className="text-sm text-gray-300">
              Инвестиции связаны с риском. Прошлые результаты не гарантируют
              будущих доходов.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
