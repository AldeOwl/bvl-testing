import React, {FC, useEffect, useState, useCallback} from 'react'
import {useNavigate} from 'react-router'

import {getTest} from '../../network/index'
import Question from '../../Components/Question/Question'
import Loader from '../../Components/Spinner/loader'

interface Response {
  id: number
  response: string
}

interface QuestionType {
  id: number
  text: string
  difficulty: number
  responses: Response[]
}

type TestProps = {
  handleAnswer: (questionId: number, answers: Array<string>, isTestFinished: boolean) => void
}

const TestItem: FC<TestProps> = (props) => {
  const {handleAnswer} = props

  const [questions, setQuestions] = useState<QuestionType[]>([])
  const [target, setTarget] = useState<number>(0)
  const [pageWasLeft, setPageWasLeft] = useState(false)
  const [isTestLoading, setIsTestLoading] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    const fetchTest = async () => {
      const res = await getTest()
      setQuestions(res)
      setIsTestLoading(false)
    }

    fetchTest()
  }, [])

  const handleVisibilityChange = useCallback(
    (isHidden: boolean) => {
      if (isHidden && !pageWasLeft) {
        setPageWasLeft(true)
      }
      if (!isHidden && pageWasLeft) {
        alert(
          'Тестирование отменено. ВНИМАНИЕ! Не закрывайте окно и не переключатель между вкладками браузера при прохождении тестирования'
        )
        setPageWasLeft(false)
        navigate('/')
      }
    },
    [pageWasLeft]
  )

  useEffect(() => {
    const handleVisibilityChangeEvent = () => {
      handleVisibilityChange(document.hidden)
    }

    document.addEventListener('visibilitychange', handleVisibilityChangeEvent)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChangeEvent)
    }
  }, [handleVisibilityChange])

  const nextQuestions = useCallback(
    (arr: Array<string>) => {
      const newTarget = target + 1

      const isTestFinished = newTarget === questions.length

      handleAnswer(questions[target].id, arr, isTestFinished)

      if (!isTestFinished) {
        setTarget(newTarget)
      }

    },
    [handleAnswer, questions, target]
  )

  if (isTestLoading) {
    return <Loader />
  }

  return <Question data={questions[target]} nextQuestions={nextQuestions} />
}

export default TestItem
