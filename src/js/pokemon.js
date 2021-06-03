const maxNum = 898;

async function callAPI() {
    for (i = 1; i <= maxNum; i++) {
        // APIでjsonを取得する
        var res = await fetch("https://pokeapi.co/api/v2/pokemon-species/" + i + "/");
        var data = await res.json();

        // jsonを変数に入れていく
        // ID、名前、URLを取得
        var pokeName = data['names'][0]['name']

        // エンドポイントを変更
        res = await fetch(pokemonUrl)
        data = await res.json();

        // 英語名
        var name = document.createElement('td');
        name.textContent = pokeName;
        tr.appendChild(name);
    }
}

callAPI();

export { pokeName }