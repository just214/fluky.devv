import { useReducer, useRef, useEffect } from "react";
import shuffle from "lodash/shuffle";

const getFeedbackCorrect: () => string = () => {
  const options: string[] = [
    "Correct!",
    "Nailed it!",
    "Good job!",
    "Way to go!",
    "Great job!",
    "Well done!",
    "Excellent!",
  ];
  const len = options.length;
  const randomIndex = Math.floor(Math.random() * len);
  return options[randomIndex];
};

const getFeedbackIncorrect = () => {
  const options: string[] = [
    "That's Incorrect.",
    "So close.",
    "Not quite.",
    "Better luck next time.",
    "Too bad.",
    "Nope, that's incorrect.",
  ];
  const len = options.length;
  const randomIndex = Math.floor(Math.random() * len);
  return options[randomIndex];
};

const getQuestionWithOptions = question => {
  const options = [
    { id: "1", value: question.Option1 },
    { id: "2", value: question.Option2 },
    { id: "3", value: question.Option3 },
    { id: "4", value: question.Option4 },
  ].filter(option => !!option.value);
  return {
    ...question,
    options,
  };
};

const useQuiz = quizQuestions => {
  const shuffledQuestions = shuffle(quizQuestions);

  const currentIndex = useRef(0);

  const initialState = {
    questions: shuffledQuestions,
    currentQuestion: getQuestionWithOptions(
      shuffledQuestions[currentIndex.current].node.data
    ),
    userSelection: null,
    isAnswered: false,
    isCorrect: false,
    answeredCount: 0,
    correctCount: 0,
    incorrectCount: 0,
    isCompleted: false, // The user has answered all the quiz questions. Time to show them their results.
    feedback: null,
  };

  const types = {
    SET_USER_SELECTION: "SET_USER_SELECTION",
    CHECK_ANSWER: "CHECK_ANSWER",
    GO_TO_NEXT_QUESTION: "GO_TO_NEXT_QUESTION",
  };

  function reducer(currentState, action): any {
    switch (action.type) {
      case types.SET_USER_SELECTION:
        return { ...currentState, userSelection: action.payload };
      case types.CHECK_ANSWER: {
        const isCorrectAnswer =
          currentState.currentQuestion.Answer === currentState.userSelection;
        const answeredCount = currentState.answeredCount + 1;
        const correctCount = isCorrectAnswer
          ? currentState.correctCount + 1
          : currentState.correctCount;
        const incorrectCount = isCorrectAnswer
          ? currentState.incorrectCount
          : currentState.incorrectCount + 1;

        const percentageCorrect: string = (
          correctCount / answeredCount
        ).toFixed(2);

        const score: number = Math.floor(+percentageCorrect * 100);
        return {
          ...currentState,
          isAnswered: true,
          isCorrect: isCorrectAnswer,
          answeredCount,
          correctCount,
          incorrectCount,
          score,
          feedback: isCorrectAnswer
            ? getFeedbackCorrect()
            : getFeedbackIncorrect(),
        };
      }

      case types.GO_TO_NEXT_QUESTION:
        if (currentIndex.current + 1 === quizQuestions.length) {
          currentIndex.current = 0; // eslint-disable-line
          return {
            ...currentState,
            isCompleted: true,
          };
        } else {
          currentIndex.current += 1; // eslint-disable-line
          const nextQuestion =
            currentState.questions[currentIndex.current].node.data;

          return {
            ...currentState,
            currentQuestion: getQuestionWithOptions(nextQuestion),
            userSelection: null,
            isAnswered: false,
            isCorrect: null,
          };
        }

      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const keycodeMap = {
    49: "1",
    50: "2",
    51: "3",
    52: "4",
  };

  const optionsRef = useRef(state.currentQuestion.options);
  const isAnsweredRef = useRef(state.isAnswered);

  useEffect(() => {
    optionsRef.current = state.currentQuestion.options; // eslint-disable-line
  }, [state.currentQuestion]);

  useEffect(() => {
    isAnsweredRef.current = state.isAnswered; // eslint-disable-line
  }, [state.isAnswered]);

  useEffect(() => {
    document.addEventListener("keypress", e => {
      // 1,2,3,4
      const options = optionsRef.current;
      if ([49, 50, 51, 52].includes(e.charCode)) {
        if (options.length < +e.key || isAnsweredRef.current) return;
        dispatch({
          type: types.SET_USER_SELECTION,
          payload: keycodeMap[e.charCode],
        });
      }
    });
    return document.removeEventListener("keypress", () => {});
  }, [state.isAnswered]);

  return [state, dispatch, types];
};

export default useQuiz;
