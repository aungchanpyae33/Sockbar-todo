interface greeting {
  speak: string;
  person: string;
  age: number;
}

function Message({ speak, person, age }: greeting) {
  return (
    <>
      <p>{speak}</p> <h1>{person}</h1>;<h4>{age}</h4>
    </>
  );
}

export default Message;
