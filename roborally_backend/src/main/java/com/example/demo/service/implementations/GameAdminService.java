package com.example.demo.service.implementations;

import com.example.demo.dal.interfaces.IBoardDao;
import com.example.demo.exceptions.DaoException;
import com.example.demo.exceptions.ServiceException;
import com.example.demo.model.Board;
import com.example.demo.model.Player;
import com.example.demo.model.admin.Game;
import com.example.demo.model.admin.User;
import com.example.demo.service.interfaces.IGameAdminService;

import java.util.ArrayList;
import java.util.List;

public class GameAdminService implements IGameAdminService {
    private final IBoardDao boardDao;

    public GameAdminService(IBoardDao boardDao){
        this.boardDao = boardDao;
    }

    @Override
    public List<Game> getGames() throws ServiceException, DaoException{
        List<Game> result = new ArrayList<>();
        for(Board board : boardDao.getBoards()){
            Game game = new Game();
            game.name = board.boardName;
            game.id = board.getGameId();
            result.add(game);


            //TODO make a way to actually start the game
            game.started = board.getPlayersNumber() > 1;
            for(int i = 0; i < board.getPlayersNumber(); i++){
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
