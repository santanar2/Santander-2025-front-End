const lista = [{nome: 'Ana'}, {nome: 'Bia'}, {nome: 'Carlos'}];

const elementosEmHtml = lista
    .filter((e) => e.nome.startsWith('A'))
    .map(e => `<li>${e.nome}<li>`)
    .join('');

    console.log(elementosEmHtml);