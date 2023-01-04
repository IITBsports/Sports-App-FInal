const express = require('express');
const app = express();
const mongoose = require('mongoose');
const nodemailer = require("nodemailer");
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require("cors");
const url = 'mongodb://10.198.49.53/sports';
const User = require('./models/user');
const Post = require('./models/post');
const RunningEventScore = require("./models/RunningEventScore");
const AvsBScore = require("./models/AvsBScore");
const CricketScore = require("./models/CricketScore");
const Url = require("./models/Url");
const Sport_info = require('./models/sport_info');
const Event = require('./models/events');
const QRRegister = require('./models/qr-register');
const Match = require('./models/match');
const Session = require('./models/session');
var passwordHash = require('password-hash');
var uuid = require('uuid');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
app.use(cors({ origin: "*" }));
var bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));


app.use(express.json());
app.use(fileUpload());
app.use(cookieParser());
app.use(session({
    genid: (req) => {
        return uuid.v4();
    },
    name: "mysesCookie",
    secret: "iugchijgnc8h6c9u7brv6rg6yb75r5e4evd",
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: false
    }
}))
const LOGINAPI = require("./API/login");
const POSTAPI = require("./API/post");
const EVENTAPI = require("./API/events");
const BLOGAPI = require("./API/blog");
const PEOPLEAPI = require("./API/people");
const SCOREAPI = require("./API/gcScores");
const MAILERAPI = require("./API/mailer");
const SEARCHAPI = require("./API/search");
const USERUPDATEAPI = require("./API/userupdate");
const BOOKINGAPI = require("./API/booking");
const MATCHAPI = require("./API/match");
const QRAPI = require("./API/QR");
const CERTIFICATEAPI = require("./API/certificate");
const QUERYAPI = require("./API/query");
const BANUSERAPI = require("./API/banuser");
const Points = require('./models/Points');
const Pts = require('./models/pts');
const blog = require('./models/blog');
const QueryData = require('./models/query');
const banUser = require('./models/banUser');
const People = require('./models/people');

// const GCSCORES = require("./API/gcScores");

const eventRoute = express.Router();



app.get('/api/addnewmatch', (req, res) => {
    res.send("here");
})

app.get('/api/searchbykeyword', (req, res) => {
    mongoose.connect(url, { useMongoClient: true }, function (err) {
        if (err) res.status(500).send(err);
        this.SEARCHAPI

    })
})

app.post('/api/addpost', (req, res) => {
    mongoose.connect(url, function (err) {
        if (err) res.status(500).send(err);
        POSTAPI.addPost(req, res);
    })
})

app.post('/api/editpost', (req, res) => {
    mongoose.connect(url, function (err) {
        if (err) res.status(500).send(err);
        POSTAPI.editPost(req, res);
    })
})

app.post('/api/deletepost', (req, res) => {
    mongoose.connect(url, function (err) {
        if (err) res.status(500).send(err);
        POSTAPI.deletePost(req, res);
    })
})

// app.get('/api/getuserdata', (req, res) => {
//     mongoose.connect(url, (err) => {
//         if (err) res.status(500).send(err);
//         LOGINAPI.getuserdata(req, res, User, Session);
//     })
// })

app.get('/api/getuserdata/:id', (req, res) => {
    mongoose.connect(url, (err) => {
        if (err) res.status(500).send(err);
        LOGINAPI.getuserdata(req.params.id, res, User, Session);
    })
})
app.post('/api/edituserdata/:id', (req, res) => {
    mongoose.connect(url, (err) => {
        console.log(req);
        console.log("aa gaya");
        console.log(req.params.id);
        console.log(req.params.id);
        console.log(req.params.id);
        if (err) res.status(500).send(err);
        LOGINAPI.edituserdata(req, res, User, Session);
    })
})


app.get('/api/getmanyposts', (req, res) => {
    mongoose.connect(url, function (err) {
        if (err) res.status(500).send(err);
        POSTAPI.getManyPosts(req, res);
    })
})

app.get('/api/getpostdetailed', (req, res) => {
    mongoose.connect(url, function (err) {
        if (err) res.status(500).send(err);
        POSTAPI.getPostDetailed(req, res);
    })
})

app.get('/api/login', (req, res) => {
    mongoose.connect(url, (err) => {
        if (err) res.status(500).send(err);
        LOGINAPI.login(req, res, User, Session);
    })
})

app.post('/api/addevent', (req, res) => {
    mongoose.connect(url, function (err) {
        console.log("hello")

        if (err) res.status(500).send(err);
        EVENTAPI.addEvent(req, res);
    })
})


app.put('/api/editevent/:id', (req, res) => {
    console.log("reached app.js")
    mongoose.connect(url, function (err) {
        console.log(req.params.id)
        if (err) res.status(500).send(err);
        EVENTAPI.editEvent(req, res);
    })
})
// app.put('/api/update-event/:id')

app.get('/api/deleteevent', (req, res) => {
    mongoose.connect(url, function (err) {
        if (err) return res.status(500).send(err);
        EVENTAPI.deleteEvent(req, res, id);
    })
})

app.get('/api/getmanyevents', (req, res) => {
    mongoose.connect(url, function (err) {
        if (err) res.status(500).send(err);
        EVENTAPI.getManyEvents(req, res);
    })
})

app.get('/api/geteventdetailed', (req, res) => {
    mongoose.connect(url, function (err) {
        if (err) res.status(500).send(err);
        EVENTAPI.getEventDetailed(req, res);
    })
})

app.post('/api/addPeople', (req, res) => {
    console.log("req")
    mongoose.connect(url, function (err) {
        console.log(req)

        if (err) res.status(500).send(err);
        PEOPLEAPI.addPeople(req, res);
    })
})
app.post('/api/addBlog', (req, res) => {
    mongoose.connect(url, function (err) {
        console.log(req)

        if (err) res.status(500).send(err);
        BLOGAPI.addBlog(req, res);
    })
})
app.get('/api/getAllBlogs', function (req, res, next) {
    mongoose.connect(url, function (err) {
        if (err) return res.status(500).send(err);
        blog.find((err, docs) => {
            if (!err) {
                res.send(docs);
            } else {
                console.log('Failed to retrieve the Course List: ' + err);
            }
        });
    })


});
app.get('/api/getAllQueries', function (req, res, next) {
    mongoose.connect(url, function (err) {
        if (err) return res.status(500).send(err);
        QueryData.find((err, docs) => {
            if (!err) {
                res.send(docs);
            } else {
                console.log(err);
            }
        });
    })


});

app.delete('/api/deleteQuery/:id', (req, res) => {
    mongoose.connect(url, function (err) {
        if (err) return res.status(500).send(err);
        QueryData.findByIdAndDelete(req.params.id, (error, data) => {
            console.log(req.params.id);
            if (error) {
                return next(error)
            } else {
                res.json(data)
            }
        })
    })

})
app.delete('/api/deleteBlog/:id', (req, res) => {
    mongoose.connect(url, function (err) {
        console.log("Hi123")
        if (err) return res.status(500).send(err);
        blog.findByIdAndDelete(req.params.id, (error, data) => {
            console.log(req.params.id);
            if (error) {
                return next(error)
            } else {
                res.json(data)
            }
        })
    })

})
app.get('/api/getBlog/:id', function (req, res, next) {
    mongoose.connect(url, function (err) {
        console.log("Hi")
        if (err) return res.status(500).send(err);
        blog.findById(req.params.id, (error, data) => {
            console.log(req.params.id);
            if (error) {
                return next(error)
            } else {
                res.json(data)
            }
        })
    })


});

app.post('/api/askasecy', (req, res) => {
    mongoose.connect(url, function (err) {
        if (err) res.status(500).send(err);
        MAILERAPI.askASecy(req, res);
    })
})

app.post('/api/addfollowedtags', (req, res) => {
    mongoose.connect(url, { useMongoClient: true }, function (err) {
        if (err) return res.status(500).send(err);
        USERUPDATEAPI.addFollowedTags(req, res);

    })
})

app.post('/api/removefollowedtags', (req, res) => {
    mongoose.connect(url, { useMongoClient: true }, function (err) {
        if (err) return res.status(500).send(err);
        USERUPDATEAPI.removeFollowedTags(req, res);
    })
})

app.post('/api/addfollowedevents', (req, res) => {
    mongoose.connect(url, { useMongoClient: true }, function (err) {
        if (err) res.status(500).send(err);
        USERUPDATEAPI.removeFollowedEvents(req, res);
    })
})

app.post('/api/removefollowedevents', (req, res) => {
    mongoose.connect(url, { useMongoClient: true }, function (err) {
        if (err) return res.status(500).send(err);
        USERUPDATEAPI.removeFollowedEvents(req, res);
    })
})

app.get('/api/getcertificate', (req, res) => {
    mongoose.connect(url, { useMongoClient: true }, function (err) {
        if (err) return res.status(500).send(err);
        CERTIFICATEAPI.getCertificate(req, res);
    })
})





app.get('/api/post/admin/loginadmin', function (req, res) { res.json('Hello from Sports server') })
app.listen(8080, () => console.log('backend running on port 8080'))
//app.get('/getAllEvents', function (req, res) { res.json('Hello ') })

app.get('/api/getAllPeoples', function (req, res, next) {
    mongoose.connect(url, function (err) {
        if (err) return res.status(500).send(err);
        People.find((err, docs) => {
            if (!err) {
                res.send(docs);
            } else {
                console.log('Failed to retrieve the Course List: ' + err);
            }
        });
    })


});
app.get('/api/getAllEvents', function (req, res, next) {
    mongoose.connect(url, function (err) {
        if (err) return res.status(500).send(err);
        Event.find((err, docs) => {
            if (!err) {
                res.send(docs);
            } else {
                console.log('Failed to retrieve the Course List: ' + err);
            }
        });
    })


});
app.get('/api/getEvent/:id', function (req, res, next) {
    mongoose.connect(url, function (err) {
        console.log("Hi")
        if (err) return res.status(500).send(err);
        Event.findById(req.params.id, (error, data) => {
            console.log(req.params.id);
            if (error) {
                return next(error)
            } else {
                res.json(data)
            }
        })
    })


});
app.delete('/api/deleteEvent/:id', function (req, res, next) {
    mongoose.connect(url, function (err) {
        console.log("Hi")
        if (err) return res.status(500).send(err);
        Event.findByIdAndRemove(req.params.id, (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.status(200).json({
                    msg: data
                })
            }
        })
    });

})

app.post('/api/addBanUser', (req, res) => {
    mongoose.connect(url, function (err) {
        if (err) res.status(500).send(err);
        banUser.create(req.body, (error, data) => {
            console.log(data)
            if (error) {
                console.log("error aa rha");
            } else {
                console.log("Hey");
                console.log(data)
                res.json(data);
            }
        })
    })
})

app.get('/api/getBanUser', function (req, res, next) {
    mongoose.connect(url, function (err) {
        if (err) return res.status(500).send(err);
        banUser.find((err, docs) => {
            if (!err) {
                res.send(docs);
            } else {
                console.log(err);
            }
        });
    })


});
app.put('/api/editbanuser/:id', (req, res) => {
    console.log("reached app.js")
    mongoose.connect(url, function (err) {
        console.log(req.params.id)
        if (err) res.status(500).send(err);
        BANUSERAPI.editBanUser(req, res);
    })
})

app.post('/api/addQuery', (req, res) => {
    mongoose.connect(url, function (err) {
        if (err) res.status(500).send(err);
        QueryData.create(req.body, (error, data) => {
            console.log(data)
            if (error) {
                console.log("error aa rha");
            } else {
                console.log("Hey");
                console.log(data)
                res.json(data);
            }
        })
    })
})

app.get('/api/getQuery/:id', function (req, res, next) {
    mongoose.connect(url, function (err) {
        console.log("Hi")
        if (err) return res.status(500).send(err);
        QueryData.findById(req.params.id, (error, data) => {
            console.log(req.params.id);
            if (error) {
                return next(error)
            } else {
                res.json(data)
            }
        })
    })


});

app.put('/api/editquery/:id', (req, res) => {
    console.log("reached app.js")
    mongoose.connect(url, function (err) {
        console.log(req.params.id)
        if (err) res.status(500).send(err);
        QUERYAPI.editQuery(req, res);
    })
})

app.post('/api/addRunningEventScore', (req, res) => {
    mongoose.connect(url, function (err) {
        console.log("hello")

        if (err) res.status(500).send(err);
        RunningEventScore.create(req.body, (error, data) => {
            console.log(data)
            if (error) {
                console.log("error aa rha");
            } else {
                console.log("Hey");
                console.log(data)
                res.json(data);
            }
        })
    })
})

app.get('/api/getRunningEventScores', function (req, res, next) {
    mongoose.connect(url, function (err) {
        if (err) return res.status(500).send(err);
        RunningEventScore.find((err, docs) => {
            if (!err) {
                res.send(docs);
            } else {
                console.log('Failed to retrieve the Course List: ' + err);
            }
        });
    })


});
app.get('/api/GetRunningEventScores/:id', function (req, res, next) {
    mongoose.connect(url, function (err) {
        if (err) return res.status(500).send(err);
        RunningEventScore.findById(req.params.id, (error, data) => {
            if (!err) {
                res.send(docs);
            } else {
                console.log('Failed to retrieve the Course List: ' + err);
            }
        });
    })


});
app.put('/api/editRunningEventScore/:id', (req, res) => {
    console.log("reached app.js")
    console.log(req.params.id + "App.js vali id")
    mongoose.connect(url, function (err) {
        console.log(req.params.id)
        if (err) res.status(500).send(err);
        SCOREAPI.updateRunningEventScore(req, res);
    })
})

app.get('/api/deleteRunningEventScores', (req, res) => {
    mongoose.connect(url, function (err) {
        if (err) return res.status(500).send(err);
        SCOREAPI.deleteRunningEventScore(req, res);
    })
})

app.delete('/api/deleteRunningEventScores/:id', function (req, res, next) {
    mongoose.connect(url, function (err) {
        console.log("Hi")
        if (err) return res.status(500).send(err);
        RunningEventScore.findByIdAndRemove(req.params.id, (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.status(200).json({
                    msg: data
                })
            }
        })
    });

})

app.post('/api/addAvsBScore', (req, res) => {
    mongoose.connect(url, function (err) {
        console.log("hello")

        if (err) res.status(500).send(err);
        AvsBScore.create(req.body, (error, data) => {
            if (error) {
                console.log(error);
            } else {
                console.log("Hey");
                console.log(data)
                res.json(data);
            }
        })
    })
})



app.get('/api/getAvsBScores', function (req, res, next) {
    mongoose.connect(url, function (err) {
        if (err) return res.status(500).send(err);
        AvsBScore.find((err, docs) => {
            if (!err) {
                res.send(docs);
            } else {
                console.log('Failed to retrieve the Course List: ' + err);
            }
        });
    })


});

app.get('/api/GetAvsBScores/:id', function (req, res, next) {
    mongoose.connect(url, function (err) {
        if (err) return res.status(500).send(err);
        AvsBScore.findById(req.params.id, (error, data) => {
            if (!err) {
                res.send(docs);
            } else {
                console.log('Failed to retrieve the Course List: ' + err);
            }
        });
    })


});


app.put('/api/editAvsBScore/:id', (req, res) => {
    console.log("reached app.js")
    console.log(req.params.id + "App.js vali id")
    mongoose.connect(url, function (err) {
        console.log(req.params.id)
        if (err) res.status(500).send(err);
        SCOREAPI.updateAvsBScore(req, res);
    })
})

app.delete('/api/deleteAvsBScores/:id', function (req, res, next) {
    mongoose.connect(url, function (err) {
        console.log("Hi")
        if (err) return res.status(500).send(err);
        AvsBScore.findByIdAndRemove(req.params.id, (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.status(200).json({
                    msg: data
                })
            }
        })
    });

})

app.post('/api/addCricketScore', (req, res) => {
    mongoose.connect(url, function (err) {
        console.log("hello")

        if (err) res.status(500).send(err);
        CricketScore.create(req.body, (error, data) => {
            if (error) {
                console.log("error aa rha");
            } else {
                console.log("Hey");
                console.log(data)
                res.json(data);
            }
        })
    })
})

app.get('/api/getCricketScores', function (req, res, next) {
    mongoose.connect(url, function (err) {
        if (err) return res.status(500).send(err);
        CricketScore.find((err, docs) => {
            if (!err) {
                res.send(docs);
            } else {
                console.log('Failed to retrieve the Course List: ' + err);
            }
        });
    })


});

app.get('/api/GetCricketScores/:id', function (req, res, next) {
    mongoose.connect(url, function (err) {
        if (err) return res.status(500).send(err);
        CricketScore.findById(req.params.id, (error, data) => {
            if (!err) {
                res.send(docs);
            } else {
                console.log('Failed to retrieve the Course List: ' + err);
            }
        });
    })


});

app.put('/api/editCricketScore/:id', (req, res) => {
    console.log("reached app.js")
    console.log(req.params.id + "App.js vali id")
    mongoose.connect(url, function (err) {
        console.log(req.params.id)
        if (err) res.status(500).send(err);
        SCOREAPI.updateCricketScores(req, res);
    })
})

app.delete('/api/deleteCricketScores/:id', function (req, res, next) {
    mongoose.connect(url, function (err) {
        console.log("Hi")
        if (err) return res.status(500).send(err);
        CricketScore.findByIdAndRemove(req.params.id, (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.status(200).json({
                    msg: data
                })
            }
        })
    });

})

//GOOD CODE TO BE IMPLEMENTED LATER
// app.post('/api/addRunningEventScore', (req, res) => {
//     mongoose.connect(url, function (err) {
//         console.log("hello")

//         if (err) res.status(500).send(err);
//         GCSCORESAPI.addRunningEventScores(req, res);
//     })
// })

// app.get('/editRunningEventScore', (req, res) => {
//     console.log("reached app.js")
//     mongoose.connect(url, function (err) {
//         console.log(req.id)
//         console.log(req.body)
//         if (err) res.status(500).send(err);
//         EVENTAPI.editRunningEventScores(req, res);
//     })
// })

// app.get('/api/deleteRunningEventScore', (req, res) => {
//     mongoose.connect(url, function (err) {
//         if (err) return res.status(500).send(err);
//         EVENTAPI.deleteRunningEventScores(req, res);
//     })
// })

// app.post('/api/addAvsBScore', (req, res) => {
//     mongoose.connect(url, function (err) {
//         console.log("hello")

//         if (err) res.status(500).send(err);
//         GCSCORESAPI.addAvsBScores(req, res);
//     })
// })

// app.get('/editAvsBScore', (req, res) => {
//     console.log("reached app.js")
//     mongoose.connect(url, function (err) {
//         console.log(req.id)
//         console.log(req.body)
//         if (err) res.status(500).send(err);
//         EVENTAPI.editAvsBScores(req, res);
//     })
// })

// app.get('/api/deleteAvsBScore', (req, res) => {
//     mongoose.connect(url, function (err) {
//         if (err) return res.status(500).send(err);
//         EVENTAPI.deleteAvsBScores(req, res);
//     })
// })

// app.post('/api/addCricketScore', (req, res) => {
//     mongoose.connect(url, function (err) {
//         console.log("hello")

//         if (err) res.status(500).send(err);
//         GCSCORESAPI.addCricketScores(req, res);
//     })
// })

// app.get('/editCricketScore', (req, res) => {
//     console.log("reached app.js")
//     mongoose.connect(url, function (err) {
//         console.log(req.id)
//         console.log(req.body)
//         if (err) res.status(500).send(err);
//         EVENTAPI.editCricketScores(req, res);
//     })
// })

// app.get('/api/deleteCricketScore', (req, res) => {
//     mongoose.connect(url, function (err) {
//         if (err) return res.status(500).send(err);
//         EVENTAPI.deleteCricketScores(req, res);
//     })
// })

app.post('/api/addUrl', (req, res) => {
    mongoose.connect(url, function (err) {
        console.log("hello")

        if (err) res.status(500).send(err);
        Url.create(req.body, (error, data) => {
            if (error) {
                console.log("error aa rha");
            } else {
                console.log("Hey");
                console.log(data)
                res.json(data);
            }
        })
    })


})
// app.post('/api/addRunningEventScores').post((req, res, next) => {
//           if (error) {
//                 return next(error)
//           } else {
//                 res.json(data)
//           }
//     })
// });


app.post('/api/addPoints', (req, res) => {
    mongoose.connect(url, function (err) {
        console.log("hello")

        if (err) res.status(500).send(err);
        Points.create(req.body, (error, data) => {
            console.log(req.body)
            console.log(error)
            console.log(data)
            if (error) {
                console.log("error aa rha");
            } else {
                console.log("Hey");
                console.log(data)
                res.json(data);
            }
        })
    })
})

app.get('/api/getPoints', function (req, res, next) {
    mongoose.connect(url, function (err) {
        if (err) return res.status(500).send(err);
        Points.find((err, docs) => {
            if (!err) {
                res.send(docs);
            } else {
                console.log('Failed to retrieve the Course List: ' + err);
            }
        });
    })


});
app.get('/api/getPts', function (req, res, next) {
    mongoose.connect(url, function (err) {
        if (err) return res.status(500).send(err);
        Pts.find((err, docs) => {
            if (!err) {
                res.send(docs);
            } else {
                console.log('Failed to retrieve the Course List: ' + err);
            }
        });
    })


});

app.post('/api/addPts', (req, res) => {
    mongoose.connect(url, function (err) {
        console.log("hello")

        if (err) res.status(500).send(err);
        Pts.create(req.body, (error, data) => {
            console.log(req.body)
            console.log(error)
            console.log(data)
            if (error) {
                console.log("error aa rha");
            } else {
                console.log("Hey");
                console.log(data)
                res.json(data);
            }
        })
    })
})
