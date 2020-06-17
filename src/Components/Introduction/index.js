import React, { Component } from "react";
import {
  Wrap,
  Content,
  Text,
  TextTitle,
  BtnRow,
  NextBtn,
} from "./style";


class Introduction extends Component {
  state = {
    page: 1,
  }

  nextHandler = () => {
    if (this.state.page === 3) this.props.setStep('test');
    this.setState({ page: this.state.page + 1 });
  }

  render() {
    const {
      page,
    } = this.state;

    return (
      <Wrap>
        {page === 1 &&
          <Content>
            <TextTitle>
              Привет, ИМЯ
        </TextTitle>
            <Text>
              В 2020 году Береговая Волейбольная Лига отмечает юбилей. 25 лет мы организуем турниры и события для любителей волейбола со всего мира. А насколько хорошо ты знаешь лигу?
          </Text>
            <Text>
              В ожидании снятия ограничительных мер связанных с COVID-19 по проведению массовых мероприятий мы предлагаем тебе принят участие в викторине «БВЛ от начала времен и до наших дней» и проверить свои знания, интуицию и чувство юмора. И не просто предлагаем, а еще и подарим подарки, если ты не будешь часто ошибаться.
          </Text>
            <BtnRow>
              <NextBtn onClick={this.nextHandler}>
                Круто, я в деле!
            </NextBtn>
            </BtnRow>
          </Content>
        }
        {page === 2 &&
          <Content>
            <Text>
              Прежде чем начать отвечать на вопросы, внимательно прочитай наши подсказки:
        </Text>
            <Text>
              Всё по настоящему. Мы ничего не придумали и у каждого вопроса есть правильный ответ.
              </Text>
            <Text>
              В некоторых вопросах может быть несколько правильных ответов , укажи их все.
              </Text>
            <Text>
              Некоторые вопросы предполагают негативный ответ. Например: «Чего НЕ БЫЛО?» Читай внимательно.
              </Text>
            <Text>
              На каждый ответ дается 60 секунд. Если ты не успеешь ответить, то система автоматически перейдет к следующему вопросу. Следи за таймером.
              </Text>
            <Text>
              Если ты точно уверен в ответе - не тяни время. При подведении итогов будут учитываться не только правильность ответов, но и время затраченное на ответ.
              </Text>
            <Text>
              Проверь уровень заряда вашего гаджета. Если в процессе ответов у тебя выключится смартфон, ноутбук или компьютер - ты не сможешь продолжить  и упустишь шанс на призы.
              </Text>
            <Text>
              Не закрывай страницу викторины, ты не сможешь повторно к ней вернуться.
              </Text>
            <BtnRow>
              <NextBtn onClick={this.nextHandler}>
                Понятно. А как я узнаю свой результат?
            </NextBtn>
            </BtnRow>
          </Content>
        }
        {page === 3 &&
          <Content>
            <Text>
              За правильный ответ мы дадим тебе 1 балл. За правильный, но не полный - 0,5 балла, за неправильный ответ ты не получишь ничего.
              </Text>
            <Text>
              Всего будет 25 вопросов, по одному вопросу за год жизни БВЛ.
              </Text>
            <Text>
              Как только ты ответишь на все вопросы мы покажем на экране твой результат в баллах и время затраченное на все ответы и сразу опубликуем их на нашем сайте, чтобы ты мог сравнить себя с другими участниками. А детализацию ответов по каждому вопросу мы покажем только тебе.
              </Text>
            <Text>
              Президент БВЛ, его жена и создатели программы не принимают участие в этой викторине.
              </Text>
            <BtnRow>
              <NextBtn onClick={this.nextHandler}>
                Поехали!
            </NextBtn>
            </BtnRow>
          </Content>
        }
      </Wrap>
    )
  }
}

export default Introduction;