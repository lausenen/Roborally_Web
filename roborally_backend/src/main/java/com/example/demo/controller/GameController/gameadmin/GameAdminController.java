package com.example.demo.controller.GameController.gameadmin;

import com.example.demo.controller.GameController.GameDto;
import com.example.demo.controller.GameController.UserDto;
import com.example.demo.exceptions.DaoException;
import com.example.demo.exceptions.MappingException;
import com.example.demo.exceptions.ServiceException;
import com.example.demo.model.admin.Game;
import com.example.demo.model.admin.User;
import com.example.demo.service.interfaces.IGameAdminService;
import com.example.demo.util.mapping.DtoMapper;
import com.example.demo.util.mapping.IDtoMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class GameAdminController {

private final IGameAdminService gameAdminService;
private final IDtoMapper dtoMapper;

    public GameAdminController(IGameAdminService gameAdminService, IDtoMapper dtoMapper) {
        this.gameAdminService = gameAdminService;
        this.dtoMapper = dtoMapper;

    }
    @PostMapping("/game")
public ResponseEntity<Integer> createGame(@RequestBody GameDto gameDto) throws ServiceException, MappingException, DaoException {
        if(gameDto.gameId != null){
            return new ResponseEntity<>(0, HttpStatus.BAD_REQUEST);
        }
        Game game = dtoMapper.convertToEntity(gameDto);
        gameAdminService.saveGame(game);
        return new ResponseEntity<>(game.gameId, HttpStatus.OK);
    }
    @PostMapping("/user/")
    public ResponseEntity<Integer> createUser(@RequestBody UserDto userDto) throws ServiceException, MappingException, DaoException {
        if(userDto.getUserId() != null){
            return new ResponseEntity<>(0, HttpStatus.BAD_REQUEST);
        }
        User user = dtoMapper.convertToEntity(userDto);
        gameAdminService.saveUser(user);
        return new ResponseEntity<>(user.userId, HttpStatus.OK);
    }

    @GetMapping("/game")
    public ResponseEntity<Collection<Game>> getGames() throws ServiceException, MappingException, DaoException{
        Collection<Game> games = gameAdminService.getGames();
        return new ResponseEntity<>(games, HttpStatus.OK);
    }

    @GetMapping("/user/")
    public ResponseEntity<UserDto> validateUser(@RequestParam String name) throws ServiceException, MappingException, DaoException {
        User user = gameAdminService.validateUser(name);
        if (user != null) {
            UserDto userDto = dtoMapper.convertToDto(user);
            return new ResponseEntity<>(userDto, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        //TODO make services for creating new games, adding players, and update game
    }
}
