// Header-komponentti
const Header = ({ course }) => <h1>{course.name}</h1>

// Part-komponentti
const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

// Content-komponentti
const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((part, index) => (
        <Part key={index} part={part} />
      ))}
    </div>
  )
}

// Total-komponentti
const Total = ({ course }) => {
  const total = course.parts.reduce((sum, part) => sum + part.exercises, 0)
  return <p>Number of exercises {total}</p>
}

// Pääkomponentti App
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App