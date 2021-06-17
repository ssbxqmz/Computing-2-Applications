const Handler = Object.create(null);

import wordCategory from "./word category";

Handler.word = function (request_object) {
    return Promise.resolve({
        "response": wordCategory[request_object].response(
            request_object.word
        )
    })
};

Handler.identify = function (request_object, session_data) {
    const name = request_object.name;

    session_data.name = name;

    contacts.push(name);

    return Promise.resolve(
        {
            "response": `Identified as ${name}`
        }
    );
};
Handler.message = function (request_object){
    return Promise.resolve({
        
    })
}

const game_length = 5;
const list_of_games = [];
let last_id = 0;
Handler.ready_to_play = function () {
    const open_vacant_games = list_of_games.filter(
        (game) => !game.closed && !game.full
    );
    if (open_vacant_games.length === 0) {
        last_id += 1;
        const new_game = {
            "id": last_id,
            "full": false,
            "play_due": Number(new Date()) + game_length * 1000000,
            "player_1_play": "",
            "player_2_play": "",
            "closed": false
        };
        list_of_games.push(new_game);
        return Promise.resolve(new_game);
    }
    const existing_game = open_vacant_games[0];
    existing_game.full = true;
    return Promise.resolve(existing_game);
};
export default Object.freeze(Handler);