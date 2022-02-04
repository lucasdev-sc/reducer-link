// Search Links salved
const getLinksSave = async (key: string) => {
  const myLinks: any = await localStorage.getItem(key);

  let linksSaves = JSON.parse(myLinks) || [];

  return linksSaves;
};

const saveLink = async (key: string, newLink: any) => {
  let linksStored: any = await getLinksSave(key);

  // no duplicate links createds

  const hasLink = linksStored.some(
    (Link: { id: any }) => Link.id === newLink.id
  );

  if (hasLink) {
    console.log("ESSE LINK JA EXISTE NA SUA LISTA!");
    return;
  }

  // Add new Link
  linksStored.push(newLink);

  await localStorage.setItem(key, JSON.stringify(linksStored));

  console.log("LINK SALVO COM SUCESSO!");
};

const deleteLink = (Links: any, id: string) => {
  let myLinks = Links.filter((item: { id: string }) => {
    return item.id !== id;
  });

  localStorage.setItem("@encurtaLink", JSON.stringify(myLinks));

  return myLinks
};

export { saveLink, getLinksSave, deleteLink };
