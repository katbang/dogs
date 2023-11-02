export async function generateMetadata() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs?slug=henry");
  const data = await res.json();
  return {
    title: data.name,
    description: `Loves ${data.favouriteColor}`,
  };
}
export default async function Henry() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs?slug=henry");
  const data = await res.json();
  const { name, favouriteColor, age, image } = data;
  console.log(data);
  return (
    <main>
      <img src={image.url} alt="Picture of Henry" />
      <h1>Hi! My name is {name}</h1>
      <p>I am {age} years old</p>
      <p>My favorite color is {favouriteColor}</p>
    </main>
  );
}
