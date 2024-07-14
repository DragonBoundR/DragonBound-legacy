var express = require('express'),
    router = express.Router();
var _ = require('underscore');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var mysql = require('mysql2/promise');
var Logger = require('../../game/lib/logger');
var ignoreCase = require('ignore-case');
var md5 = require('md5');
var geoip = require('geoip-lite');
var ip_regs = {};
var ip_logins = {};

function DateBan(TimeBan) {
    var datetime = new Date(TimeBan);
    
    var year    = datetime.getFullYear();
    var month   = datetime.getMonth() + 1; // (0-11)
    var date    = datetime.getDate();
    var hour    = datetime.getHours();
    var minute  = datetime.getMinutes();
    var second  = datetime.getSeconds();
    
    var ResultBan = year + "/" + addZero(month) + "/" + addZero(date) + " " + addZero(hour) + ":" + addZero(minute) + ":" + addZero(second);
    
    return ResultBan;
}

function addZero(i) {
  if (i < 10) {
    i = "0" + i
  };  
  return i;
}

router.use('/guild', require('./guild'));
router.use('/user', require('./user'));
router.use('/u', require('./search_user_id'));
router.use('/api', require('./api'));
router.use('/f', require('./facebook'));
router.use('/settings', require('./userctl'));
router.use('/post_action', require('./posts'));
router.use('/me', require('./myplayer'));
router.use('/accounts/password/change', require('./password_change'));
router.use('/accounts/password/change/done', require('./password_change_done'));
router.use('/ban', require('./ban'));
router.use('/pin', require('./pin_code'));
router.use('/my_payments', require('./my_payments'));
router.use('/gift_gm', require('./ava'));
router.use('/gift_owners', require('./owners'));
router.use('/z', require('./ScreenShot'));
router.use('/cash', require('./cash'));
router.use('/cash2', require('./cash2'));
router.use('/chat', require('./chat'));
//router.get('/guests', require('./delegacy'));

//router.get('/bid', require('./invite'));
//router.post('/bid', require('./invite'));

/*router.get('/login', require('./login'));
router.post('/login', require('./login'));*/
//router.get('/rr', require('./ranking_rr'));
router.get('/u/:user_id/avatars', require('./remove_ava.js'));
router.post('/u/:user_id/avatars', require('./remove_ava.js'));
router.get('/guild/:guild_id/shop', require('./shopctl.js'));
router.post('/guild/:guild_id/shop', require('./shopctl.js'));
/*router.get('/pm2',function (req, res) {
    res.redirect('http://classicworld.net/pm2');
});*/
router.get('/you_are_welcome', function (req, res) {
    if (req.session) {
        if (req.session.account_id) {
            res.render('welcome', {
                user: req.session.game_id
            });
        } else {
            res.redirect('/');
        }
    } else {
        res.redirect('/');
    }
});

router.get('/', function (req, res) {
    res.render('index', {});
});

router.get('/logout', function (req, res) {
    req.session.destroy();
    res.redirect('/');
});

router.get('/login', function (req, res) {
    res.render('login', {});
});

router.get('/cash', function (req, res) {
    res.render('cash', {});
});
router.get('/cash2', function (req, res) {
    res.render('cash2', {});
});

router.get('/resetallserverandy', function (req, res) {
    res.send(JSON.stringify(["servidor web reiniciado"]));
    process.exit(1);
});

router.get('/test', function (req, res) {
    res.redirect('/');
});

router.get('/anticheat', function (req, res) {
    res.redirect('/');
});

router.get('/rr', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    var date_unix = Date.now();
    var data = [];
    if (req.query.r == 4 && isNaN(req.query.s)) {
        return null;
    }
    if (req.query.r == 8) {
        req.db.connection.getConnection().then(conn => {
            conn.query('SELECT Id, Name, members, rank, img, fondo, about FROM guild')
                .then(rows1 => {
                conn.release();
                if (rows1[0].length > 0) {
                    let res01 = rows1[0];
                    let next_rank = 0;
                    for (var u in res01) {
                        if (res01[u].members <= 1099) { next_rank = 0; }
                        else if (self.player.gp >= 1100 && self.player.gp <= 1199) { next_rank = 1; }
                                    else if (self.player.gp >= 1200 && self.player.gp <= 1499) { next_rank = 2; }
                                    else if (self.player.gp >= 1500 && self.player.gp <= 1799) { next_rank = 3; }
                                    else if (self.player.gp >= 1800 && self.player.gp <= 2299) { next_rank = 4; }
                                    else if (self.player.gp >= 2300 && self.player.gp <= 2799) { next_rank = 5; }
                                    else if (self.player.gp >= 2800 && self.player.gp <= 3499) { next_rank = 6; }
                                    else if (self.player.gp >= 3500 && self.player.gp <= 4199) { next_rank = 7; }
                                    else if (self.player.gp >= 4200 && self.player.gp <= 5099) { next_rank = 8; }
                                    else if (self.player.gp >= 5100 && self.player.gp <= 5999) { next_rank = 9; }
                                    else if (self.player.gp >= 6000 && self.player.gp <= 6899) { next_rank = 10; }
                                    else if (self.player.gp >= 6900 && self.player.gp <= 7537) { next_rank = 11; }
                                    else if (self.player.gp >= 7538 && self.player.gp <= 8689) { next_rank = 12; }
                                    else if (self.player.gp >= 8690 && self.player.gp <= 10101) { next_rank = 13; }
                                    else if (self.player.gp >= 10102 && self.player.gp <= 11429) { next_rank = 14; }
                                    else if (self.player.gp >= 11430 && self.player.gp <= 13023) { next_rank = 15; }
                                    else if (self.player.gp >= 13024 && self.player.gp <= 15719) { next_rank = 16; }
                                    else if (self.player.gp >= 15720 && self.player.gp <= 18101) { next_rank = 17; }
                                    else if (self.player.gp >= 18102 && self.player.gp <= 22608) { next_rank = 18; }
                                    else if (self.player.gp >= 22609 && self.player.gp <= 28474) { next_rank = 19; }
                                    else if (self.player.gp >= 28475 && self.player.gp <= 37346) { next_rank = 20; }
                                    else if (res01[u].members >= 37346 && res01[u].members <= 48720) { next_rank = 21; }
                                   else if (res01[u].members >= 48720 && res01[u].members <= 55200) { next_rank = 22; }
                                   else if (res01[u].members >= 55200 && res01[u].members <= 73561) { next_rank = 23; }
                                   else if (res01[u].members >= 73561) { next_rank = 24; } else {}
                        if (res01[u].rank != next_rank) {
                            if (res01[u].rank <= 25 && res01[u].Name !== 'GM') {
                                var IdGuild = res01[u].Id;
                                conn.query('UPDATE guild SET rank = ? WHERE Id = ?', [next_rank, IdGuild])
                                    .then(rows3 => {
                                    conn.release();
                                    if (rows3[0].affectedRows > 0 || rows3[0].changedRows > 0) {
                                        Logger.info('Guild: ' + res01[u].Name + ' - New Update Rank: ' + next_rank);
                                    } else {
                                        Logger.info('Bug Guild: ' + res01[u].Name + ' - New Update Rank: ' + next_rank);
                                    }
                                    return null;
                                });
                            }
                        }
                    }
                    return null;
                } else {}
            });
            var number_link = parseInt(req.query.s);
            if (number_link === 1)
                number_link = 0;
            conn.query('SELECT Id, Name, members, rank, img, fondo, about FROM guild ORDER BY members DESC limit '+number_link+', 30')
                .then(rows => {
                conn.release();
                if (rows.length > 0) {
                    conn.query('SELECT r, last_reset_rankings, next_reset_rankings, time_reset FROM resets_rankings WHERE r = ?', [req.query.r])
                        .then(rows_2 => {
                        conn.release();
                        let res00 = rows_2[0][0];
                        var last_resets_rankings = parseInt(res00.last_reset_rankings);
                        if (res00.next_reset_rankings <= Date.now()) {
                            last_resets_rankings = Date.now();
                            var junior = Date.now();
                            junior = parseInt(res00.last_reset_rankings) + (7 * 24 * 60 * 60 * 1000);
                            req.db.updateResetRankingRiD(Date.now(), junior, req.query.r);
                            req.db.updateResetGPsGuilds(parseInt(1));
                        }
                        let res0 = rows[0];
                        data.push("8");
                        data.push(req.query.s);
                        for (var u in res0) {
                            data.push(res0[u].members, res0[u].rank, res0[u].Name);
                        }
                        data.push([last_resets_rankings,71,parseInt(res00.next_reset_rankings)],date_unix);
                        res.send(JSON.stringify(data));
                    });
                    
                } else {
                    res.send(JSON.stringify([0]));
                }
            });
        });
    }
    else if (req.query.r == 1) {
        req.db.connection.getConnection().then(conn => {
            var number_link = parseInt(req.query.s);
            if (number_link === 1)
                number_link = 0;
            conn.query('SELECT u.game_id, u.gp, u.rank, g.Name FROM users u LEFT JOIN guild_member m ON m.UserId = u.IdAcc LEFT JOIN guild g ON g.Id = m.Id ORDER BY u.gp DESC limit '+number_link+', 30')
                .then(rows => {
                conn.release();
                if (rows.length > 0) {
                    let res0 = rows[0];
                    conn.query('SELECT r, last_reset_rankings, next_reset_rankings, time_reset FROM resets_rankings WHERE r = ?', [req.query.r])
                        .then(rows_2 => {
                        conn.release();
                        let res00 = rows_2[0][0];
                        var last_resets_rankings = parseInt(res00.last_reset_rankings);
                        if (res00.next_reset_rankings <= Date.now()) {
                            last_resets_rankings = Date.now();
                            var junior = Date.now();
                            junior = junior + (30 * 1000 * 60);
                            req.db.updateResetRankingRiD(Date.now(), junior, req.query.r);
                        }
                        data.push("1");
                        data.push(req.query.s);
                        for (var u in res0) {
                            data.push(res0[u].gp, res0[u].rank, res0[u].game_id, res0[u].Name ? res0[u].Name : "");
                        }
                        data.push([last_resets_rankings,30,null],Date.now());
                        res.send(JSON.stringify(data));
                    });
                } else {
                    res.send(JSON.stringify([0]));
                }
            });
        });
    }
    else if (req.query.r == 4) {
        req.db.connection.getConnection().then(conn => {
            var number_link = parseInt(req.query.s);
            if (number_link === 1)
                number_link = 0;
            conn.query('SELECT u.game_id, u.rank, u.prixw, g.Name FROM users u LEFT JOIN guild_member m ON m.UserId = u.IdAcc LEFT JOIN guild g ON g.Id = m.Id WHERE u.prixw != 0 ORDER BY u.prixw DESC limit '+number_link+', 30')
                .then(rows => {
                conn.release();
                if (rows.length > 0) {
                    let res0 = rows[0];
                    data.push("1");
                    data.push(req.query.s);
                    for (var u in res0) {
                        data.push(res0[u].prixw, res0[u].rank, res0[u].game_id, res0[u].Name ? res0[u].Name : "");
                    }
                    data.push([date_unix,30,null],date_unix);
                    res.send(JSON.stringify(data));
                } else {
                    res.send(JSON.stringify([0]));
                }
            });
        });
    }
    else if (req.query.r == 3) {
        req.db.connection.getConnection().then(conn => {
            var number_link = parseInt(req.query.s);
            if (number_link === 1)
                number_link = 0;
            conn.query('SELECT Id, Name, points, rank FROM guild WHERE points != 0 ORDER BY points DESC LIMIT '+number_link+', 30')
                .then(rows => {
                conn.release();
                if (rows.length > 0) {
                    let res0 = rows[0];
                    data.push("8");
                    data.push(req.query.s);
                    for (var u in res0) {
                        data.push(res0[u].points, res0[u].rank, res0[u].Name);
                    }
                    data.push([date_unix,30,null],date_unix);
                    res.send(JSON.stringify(data));
                } else {
                    res.send(JSON.stringify([0]));
                }
            });
        });
    } else {
        req.db.connection.getConnection().then(conn => {
            var number_link = parseInt(req.query.s);
            if (number_link === 1)
                number_link = 0;
            var search_range = req.query.r;
            search_range = search_range.replace('w', '');
            var search_code_rank = 'u.rank = ?';
            if (parseInt(search_range) === parseInt(21)) {
                search_code_rank = 'u.rank >= ? AND u.rank <= 24';
            } else {
                search_code_rank = 'u.rank = ?';
            }
            conn.query('SELECT u.game_id, u.ranking_semanal, u.rank, g.Name FROM users u LEFT JOIN guild_member m ON m.UserId = u.IdAcc LEFT JOIN guild g ON g.Id = m.Id WHERE ' + search_code_rank + ' ORDER BY u.ranking_semanal DESC limit ?, 30', [search_range, number_link])
                .then(rows => {
                conn.release();
                if (rows.length > 0) {
                    let res0 = rows[0];
                    conn.query('SELECT r, last_reset_rankings, next_reset_rankings, time_reset FROM resets_rankings WHERE r = ?', [24])
                        .then(rows_2 => {
                        conn.release();
                        let res00 = rows_2[0][0];
                        var last_resets_rankings = parseInt(res00.last_reset_rankings);
                        if (res00.next_reset_rankings <= Date.now()) {
                            last_resets_rankings = Date.now();
                            var junior = Date.now();
                            junior = parseInt(res00.last_reset_rankings) + (7 * 24 * 60 * 60 * 1000);
                            req.db.updateResetRankingRiD(Date.now(), junior, 24);
                            req.db.updateGPsRankingSemanalByIdAcc(parseInt(0), parseInt(0));
                        }
                        data.push(req.query.r);
                        data.push(req.query.s);
                        for (var u in res0) {
                            data.push(res0[u].ranking_semanal, res0[u].rank, res0[u].game_id, res0[u].Name ? res0[u].Name : "");
                        }
                        data.push([last_resets_rankings,30,parseInt(res00.next_reset_rankings)],Date.now());
                        res.send(JSON.stringify(data));
                    });
                } else {
                    res.send(JSON.stringify([0]));
                }
            });
        });
    }
});

router.get('/reset_no_win', function (req, res) {
    req.db.connection.getConnection().then(conn => {
        var up = "{}";
        conn.query('UPDATE accounts SET no_win_bonus = ? WHERE Id >= 1', [up])
            .then(rows => {
            conn.release();
            if (rows.length > 0) {
                let res0 = rows[0];
                res.send(JSON.stringify(["UP NO WIN BONUS CONFIRMED!"]));
            } else {
                res.send(JSON.stringify([0]));
            }
        });
    });
});

router.get('/avatars', function (req, res) {
    if (req.session) {
        if (req.session.account_id) {
            res.redirect('/u/'+req.session.account_id+'/avatars');
        } else {
            res.redirect('/login?next=/avatars');
        }
    } else {
        res.redirect('/login?next=/avatars');
    }
});

router.get('/rankings', function (req, res) {//"Please login first"
    res.setHeader('Content-Type', 'application/json');
    var data = [];
    if (req.query.type === 'friends') {
        if (req.session) {
            if (req.session.account_id) {
                var game_id = req.session.game_id;
                var rank = req.session.rank;
                var acc_id = req.session.account_id;
                req.db.connection.getConnection().then(conn => {
                    conn.query('SELECT u.IdAcc, u.gp, u.game_id, u.rank FROM users u INNER JOIN friends ds ON u.IdAcc = ds.id_amigo INNER JOIN accounts a ON u.IdAcc = a.Id ANd ds.id_yo = ? ORDER BY u.gp DESC', [acc_id])
                        .then(rows => {
                        conn.release();
                        if (rows[0].length > 0) {
                            let res0 = rows[0];
                            data.push(5);
                            data.push(1);
                            for (var u in res0) {
                                data.push(/*u, */res0[u].gp, res0[u].rank, res0[u].game_id);
                            }
                            res.send(JSON.stringify(data));
                        } else {
                            res.send(JSON.stringify([5, 1,/*1,*/ 1000, rank, game_id]));
                        }
                    });
                });
            } else {
                res.send(JSON.stringify("Please login first"));
            }
        } else {
            res.send(JSON.stringify("Please login first"));
        }
    } else if (req.query.type === 'guild') {
        if (req.session) {
            if (req.session.account_id) {
                var acc_id = req.session.account_id;
                req.db.connection.getConnection().then(conn => {
                    conn.query('SELECT g.Id FROM users u INNER JOIN guild_member m ON m.UserId = u.IdAcc LEFT JOIN guild g ON g.Id = m.Id WHERE u.IdAcc = ?', [acc_id])
                        .then(rowss => {
                        conn.release();
                        if (rowss[0].length > 0) {
                            let res00 = rowss[0];
                            conn.query('SELECT u.game_id, u.IdAcc, u.rank, u.gp from guild_member m INNER JOIN guild g ON m.Id = g.Id INNER JOIN users u ON m.UserId = u.IdAcc WHERE g.Id = ? ORDER BY u.gp DESC', [res00[0].Id])
                                .then(rows => {
                                conn.release();
                                if (rows[0].length > 0) {
                                    let res0 = rows[0];
                                    data.push(6);
                                    data.push(1);
                                    for (var u in res0) {
                                        data.push(/*u, */res0[u].gp, res0[u].rank, res0[u].game_id);
                                    }
                                    res.send(JSON.stringify(data));
                                } else {
                                    res.send(JSON.stringify("You are not in a guild"));
                                }
                            });
                        } else {
                            res.send(JSON.stringify("You are not in a guild"));
                        }
                    });
                });
            } else {
                res.send(JSON.stringify("Please login first"));
            }
        } else {
            res.send(JSON.stringify("Please login first"));
        }
    } else {
        res.send(JSON.stringify("Unknown type"));
    }
});

router.get('/ri', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    var y;
    y = new Date().getTime();
    var level = [y, [1100, 1200, 1500, 1800, 2300, 2800, 3500, 4200, 5100, 6000, 6900, 7538, 8690, 10102, 11430, 13024, 15720, 18102, 22609, 28475, 37347, 48720, 55200, 73561],
        ["!", "!", "!", "!", "!", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [80, 62, 46, 32, 20, 12, 6, 3, 1, 0.1]
    ];
    res.send(JSON.stringify(level));
});

router.get('/s', function (req, res) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    if (req.session) {
        if (req.session.account_id) {
            req.session.touch();
            var acc_id = req.session.account_id;
            var rank = req.session.rank;
			var game_id = req.session.game_id;
			var gender = req.session.gender;
            var acc_session = req.session.acc_session;
            res.send(JSON.stringify([acc_id, rank, 0, acc_session, game_id, gender]));
        } else {
            res.send(JSON.stringify([0]));
        }
    } else {
        res.send(JSON.stringify([0]));
    }
});

router.get('/f', function (req, res) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.send(JSON.stringify([0]));
});

router.post('/f', function (req, res) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.send(JSON.stringify([0]));
});

router.post('/g', function (req, res) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    req.session.destroy();
    res.send(JSON.stringify([0]));
});

router.post('/ajaxLogin', function (req, res) {
    /*var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://berny-games.com/ClassicWorld/require/accounts.php");
    xhr.send();*/
    res.setHeader('Content-Type', 'application/json');
    var valid_enter = true;
    /*var valid_enter = false;*/
    /*if (req.headers.origin !== "null") {
        if ((req.headers.origin == "http://localhost:8080" || req.headers.origin == "http://www.localhost:8080") || (req.headers.host == "localhost:8080" || req.headers.host == "www.localhost:8080")) {
            valid_enter = true;
        }
    }*/

    var ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
    //var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || (req.connection.socket ? req.connection.socket.remoteAddress : null);
    var reg = /([^f:]+)/;
    let ip_result = reg.exec(req.connection.remoteAddress)[0];
    
    var computer_ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
    var my_player_country = req.body.my_player_country;
    
    /*if (ip_result !== '200.109.223.57') {
        res.send(JSON.stringify(['You are not allowed to enter']));
        return null;
    }*/
    /*if (computer_ip === '190.42.88.35' || computer_ip === '200.121.230.20' || computer_ip === '200.8.145.186' || computer_ip === '179.6.220.6' || computer_ip === '179.6.220.6') {
        res.send(JSON.stringify(['Your IP Was Forbidden In The Game!']));
        return null;
    }*/
    
    if (!valid_enter) {
        Logger.debug("flood " + req.headers.origin + " " + req.headers.host);
        res.status(500).send('Ip Banned!');
        return null;
    }
    var country = 'BOT';
    if (ip) {
        var tmpip = ip.split(',');
        var geo = geoip.lookup(tmpip[0]);
        if (geo) {
            country = geo.country;
        }
    }
    var user = req.body.u;
    var password = req.body.p;
    Logger.log("'" + user + "' " + req.body.r);
    if (Buffer.byteLength(user, 'utf8') < 2 || Buffer.byteLength(user, 'utf8') > 30) {
        res.send(JSON.stringify(["Nombre de Usuario incorrecto!"]));
    } else {
        req.db.connection.getConnection().then(conn => {
            conn.query('SELECT ip FROM ip_user_banned WHERE ip = ?', [computer_ip])
                .then(ips_baneadas => {
                conn.release();
                if (ips_baneadas[0].length > 0) {
                    let ban_ip = ips_baneadas[0][0];
                    res.send(JSON.stringify(['Your IP Was Forbidden In The Game!']));
                    return null;
                } else {
                    req.db.getAccountByUsername(user)
                        .then(function (rows) {
                        var data = rows[0][0];
                        if (data.Password === password) {
                            req.db.getUserByIdAcc(data.Id)
                                .then(function (rows2) {
                                if (rows2[0].length > 0) {
                                    var res1 = rows2[0][0];
                                    req.session.cookie.expires = false;
                                    req.session.cookie.maxAge = new Date(Date.now() + (60 * 1000 * 1440));
                                    req.session.account_id = data.Id;
                                    req.session.rank = res1.rank;
                                    req.session.acc_session = data.Session;
                                    req.session.game_id = res1.game_id;
									req.session.gender = res1.gender;
                                    Logger.log("Login: " + res1.game_id);
                                    if (res1.banned === 1) {
                                        req.db.getUserByBannedTest(data.Id)
                                            .then(function (dbplay) {
                                            var dbtt = dbplay[0][0];
                                            if (dbtt.date === 'Forever') {
                                                res.send(JSON.stringify([dbtt.razon, dbtt.date, 0]));
                                                return null;
                                            } else {
                                                if (Date.now() >= parseInt(dbtt.date)) {
                                                    req.db.deleteBannedByIdAcc(data.Id);
                                                    req.db.updateBannedStatus(0, data.Id);
                                                    res.status(500).send('The ban was removed from your account, you are kindly asked to login to your account again.');
                                                } else {
                                                    res.send(JSON.stringify([dbtt.razon, DateBan(parseInt(dbtt.date)), 0]));
                                                    return null;
                                                }
                                            }
                                        });
                                    }
                                    if (res1.banned === 0) {
                                        res.send(JSON.stringify([data.Id, res1.rank, 0, data.Session, res1.game_id, res1.gender]));
                                        req.db.deleteAvatarExpireByUserId(Date.now(), data.Id);
                                        req.db.updateIpComputerUsers(computer_ip, data.Id);
                                        req.db.updateAccountByIpComputer(computer_ip, data.Id);
                                        req.db.getRankSpecialByIdAcc(data.Id)
                                            .then(function (dbbplay) {
                                            var dbbtt = dbbplay[0][0];
                                            var time = Date.now();
                                            if (dbbtt.time < time) {
                                                req.db.updateRankSpecialByIdAcc(0, 0, data.Id);
                                                req.db.deleteSistemRankSpecialByIdAcc(data.Id);
                                            }
                                        });
                                    }
                                } else {
                                    res.send(JSON.stringify([0]));
                                }
                            })
                                .catch(function (err) {
                                res.send(JSON.stringify([0]));
                            });
                        } else {
                            Logger.log("'" + user + "' password error " + data.Password + " " + password);
                            res.send(JSON.stringify([0]));
                        }
                    })
                        .catch(function (err) {
                        res.send(JSON.stringify([0]));
                    });
                }
            });
        });
    }
});

router.post('/ajaxRegister', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    var valid_enter = true;
    /*var valid_enter = false;*/
    /*if (req.headers.origin !== "null") {
        if ((req.headers.origin == "http://localhost:8080" || req.headers.origin == "http://www.localhost:8080") || (req.headers.host == "localhost:8080" || req.headers.host == "www.localhost:8080")) {
            valid_enter = true;
        }
    }*/
    var ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
    if(ip_regs[ip]==undefined){
        ip_regs[ip] = {baned:false,actions:0};
    } else {
        if(ip_regs[ip].actions>5)
            ip_regs[ip].baned = true;
        if(ip_regs[ip].baned){
          res.status(500).send('Ip Banned!');
          return null;
        }
    }
    var reg = /([^f:]+)/;
    let ip_result = reg.exec(req.connection.remoteAddress)[0];
    
    var computer_ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
    var my_player_country = req.body.my_player_country;
    
    /*if (computer_ip !== '200.109.223.57') {
        res.send(JSON.stringify(['You are not allowed to enter']));
        return null;
    }*/
    /*if (computer_ip === '190.42.88.35' || computer_ip === '200.121.230.20' || computer_ip === '200.8.145.186' || computer_ip === '181.64.91.50' || computer_ip === '179.6.220.6') {
        res.send(JSON.stringify(['Your IP Was Forbidden In The Game!']));
        return null;
    }*/
    
    if (!valid_enter) {
        Logger.debug("floodreg " + req.headers.origin + " " + req.headers.host);
        res.status(500).send('Ip Banned!');
        return null;
    }
    var user = req.body.name;
    if (/\s/g.test(user) === true) {
        res.send(JSON.stringify(["Nombre de usuario no puede contener espacios"]));
        return null;
    }
    if (ignoreCase.startsWith(user, " ")) {
        res.send(JSON.stringify(["Nombre de usuario no puede contener espacios"]));
        return null;
    }
    if (ignoreCase.endsWith(user, " ")) {
        res.send(JSON.stringify(["Nombre de usuario no puede contener espacios"]));
        return null;
    }
    /* =========Pin User========= */
    var CheckPinUser = req.body.pinuser;
    Logger.info("Pin User: "+CheckPinUser);
    if (/\s/g.test(CheckPinUser) === true) {
        res.send(JSON.stringify(["Pin User no puede contener espacios"]));
        return null;
    }
    if (ignoreCase.startsWith(CheckPinUser, " ")) {
        res.send(JSON.stringify(["Pin User no puede contener espacios"]));
        return null;
    }
    if (ignoreCase.endsWith(CheckPinUser, " ")) {
        res.send(JSON.stringify(["Pin User no puede contener espacios"]));
        return null;
    }
    if (isNaN(CheckPinUser)) {
        res.send(JSON.stringify(["Pin User debe de ser un numero"]));
        return null;
    }
    if (CheckPinUser.length <= 0 || CheckPinUser.length >= 5) {
        res.send(JSON.stringify(["Pin User solo debe tener 4 digitos"]));
        return null;
    }
    /* =========Pin User========= */
    var country = 'BOT';
    if (ip) {
        var tmpip = ip.split(',');
        var geo = geoip.lookup(tmpip[0]);
        if (geo)
            country = geo.country;
    }
    /*var email = req.body.email;*/
    var password = req.body.password;
    var gender = req.body.gender;
    var validate = false;
    /*Logger.info('Email: '+email);
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)) {
        res.send(JSON.stringify(["Por favor escriba correctamente su correo electr�nico."]));
        return null;
    }*/
    /*if (Buffer.byteLength(gender, 'utf8') < 0 || (gender !== 'm' || gender !== 'f'))*/
    if (gender === 'm')
        gender = 'm';
    else if (gender === 'f')
        gender = 'f';
    else {
        res.send(JSON.stringify(["Oops tuvimos un error de su registro, se le pide amablemente volverse a registrar :)"]));
        return null;
    }
    Logger.log("'" + user + "' " + gender);
    var tmpusrl = user;
    var tmpuser = tmpusrl.toLowerCase();
    if (Buffer.byteLength(user, 'utf8') < 1 || Buffer.byteLength(user, 'utf8') > 30) {
        res.send(JSON.stringify(["Nombre de Usuario incorrecto!"]));
    } else {
        req.db.connection.getConnection().then(conn => {
            conn.query('SELECT ip FROM ip_user_banned WHERE ip = ?', [computer_ip])
                .then(ips_baneadas => {
                conn.release();
                if (ips_baneadas[0].length > 0) {
                    let ban_ip = ips_baneadas[0][0];
                    res.send(JSON.stringify(['Your IP Was Forbidden In The Game!']));
                    return null;
                } else {
                    req.db.dontExitsUserByUsername(tmpuser)
                        .then(function (rows) {
                        req.db.dontExitsUserByGameId(user)
                            .then(function (rows1) {
                            var validate = true;
                            var dt2 = {
                                Email: '',
                                Name: user,
                                Password: password,
                                PinUser: CheckPinUser,
                                Username: user,
                                Salt: ':',
                                Session: md5(user + ":" + gender),
                                views: 0,
                                IsOnline: 0,
                                Birthday: new Date(),
                                IP: computer_ip
                            };
                            req.db.putAccountFB(dt2)
                                .then(function (result) {
                                var uid = result[0].insertId;
                                var datos = {
                                    game_id: user,
                                    rank: 0,
                                    gp: 1100,
                                    gold: 5000000,
                                    cash: 150000,
                                    gender: gender,
                                    unlock2: 0,
                                    photo_url: '',
                                    name_changes: 0,
                                    power_user: 0,
                                    plus10gp: 0,
                                    mobile_fox: 0,
                                    country: my_player_country,
                                    flowers: 0,
                                    map_pack: 0,
                                    megaphones: 0,
                                    is_muted: 0,
                                    banned: 0,
                                    prixw: 0,
                                    probability: 0,
                                    IdAcc: uid,
                                    IP: computer_ip,
                                    block_friend: 0,
                                    CashCharger: 0,
                                    ranking_semanal: 0
                                };
                                req.db.putUserFB(datos)
                                    .then(function (result2) {
                                    var nnid = result2[0].insertId;
                                    var head = 1;
                                    var body = 2;
                                    if (gender === 'f') {
                                        head = 3;
                                        body = 4;
                                    }
                                    var nxdi = {
                                        Id: nnid,
                                        head: head,
                                        body: body,
                                        eyes: 0,
                                        flag: 0,
                                        background: 0,
                                        foreground: 0
                                    };
                                    req.db.putAvatarUseFB(nxdi)
                                        .then(function (rows4) {
                                        req.session.cookie.expires = false;
                                        req.session.cookie.maxAge = new Date(Date.now() + (60 * 1000 * 1440));
                                        req.session.account_id = uid;
                                        req.session.rank = datos.rank;
                                        req.session.acc_session = dt2.Session;
                                        req.session.game_id = user;
										req.session.gender = gender;
                                        res.send(JSON.stringify([uid, datos.rank, 0, dt2.Session, user, gender]));
                                        ip_regs[ip].actions++;
                                        req.db.putRelationNew(result[0].insertId);
                                        req.db.putFriends(result[0].insertId, result[0].insertId);
                                    })
                                        .catch(function (err) {
                                        Logger.error("" + err.stack);
                                        res.send(JSON.stringify(["Error Servidor"]));
                                    });
                                }).catch(function (err) {
                                    Logger.error("" + err.stack);
                                    res.send(JSON.stringify(["Error Servidor"]));
                                });
                            }).catch(function (err) {
                                Logger.error("" + err.stack);
                                res.send(JSON.stringify(["Error Servidor"]));
                            });
                        })
                            .catch(function (err) {
                            res.send(JSON.stringify(["Pruebe con otro Usuario"]));
                        });
                    })
                        .catch(function (err) {
                        res.send(JSON.stringify(["Pruebe con otro Usuario"]));
                    });
                }
            });
        });
    }
});

router.get('/w2', function (req, res) {
    res.setHeader('Content-Type', 'application/json');  
    var data = [86, 0, 0, ['Ranks Altos', 1, '', 0, 600, 26, 24],
        ['Encuentra al GM', 5, '', 10, 100, 26, 31],
        ['Principiantes', 1, '', 0, 100, 0, 4],
        ['All', 3, '', 0, 100, , ],
        ['All', 3, '', 2, 600, , ],
        ['Bunge', 5, '', 0, 1000, 26, 26],
        ['Test', 8, '', 5, 10, 30 , 31],
        ['Especial', 1, '', 0, 0, 25 , 29],
        ['Aduka', 1, '', 0, 0, 0 , 0],
        ['GM & ADM', 8, '', 10, 20, 26, 31],
        ['GM', 8, '', 5, 10, 26 , 27],
        ['Prix', 2, '', 1, 6, 26, 26, 1624226400000],parseInt(Date.now())
    ];
    req.session.touch();
    res.send(JSON.stringify(data));
});

module.exports = router;