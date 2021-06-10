package com.example.demo.service.implementations;

import com.example.demo.dal.interfaces.IBoardDao;
import com.example.demo.exceptions.DaoException;
import com.example.demo.exceptions.ServiceException;
import com.example.demo.model.Board;
import com.example.demo.model.Player;
import com.example.demo.model.admin.Game;
import com.example.demo.model.admin.User;

import java.util.ArrayList;
import java.util.List;

public class GameAdminService {
    private final IBoardDao boardDao;

    public GameAdminService(IBoardDao boardDao) {
        this.boardDao = boardDao;
    }

    public List<Game> getGames() throws ServiceException, DaoException {

    List<Game> result = new ArrayList<>();
    for(Board board: boardDao.getBoards()){
        Game game = new Game();
        game.id = board.getGameId();
        game.name = board.boardName;
        result.add(game);

        game.started = board.getPlayersNumber() > 1;
        for(int i = 0; i< board.getPlayersNumber(); i++){
            Player player = board.getPlayer(i);
            User user = new User();
            user.playerId = player.getPlayerId();
            user.playerName = player.getName();
            game.users.add(user);
        }

    }
    return result;
}
}
