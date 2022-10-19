package routes

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/gin-gonic/gin"
)

func Setup(templateFolder string, staticFolder string) *gin.Engine {
	router := gin.Default()

	router.LoadHTMLGlob(templateFolder + "/*")
	router.Static("/static", staticFolder)
	router.NoRoute(noRoute)
	router.POST("/generate", generate)

	return router
}

func noRoute(ctx *gin.Context) {
	ctx.HTML(http.StatusOK, "index.html", gin.H{})
}

type VoteOption struct {
	Id   int    `json:"id"`
	Name string `json:"name"`
}

type VoteInfo struct {
	Title   string       `json:"title"`
	Options []VoteOption `json:"options"`
}

func generate(ctx *gin.Context) {
	var voteInfo VoteInfo
	jsonData, _ := ioutil.ReadAll(ctx.Request.Body)
	json.Unmarshal(jsonData, &voteInfo)
	command := "poll question:" + voteInfo.Title
	for index, option := range voteInfo.Options {
		command += fmt.Sprintf(" choice_%c:%s", index+'a', option.Name)
	}
	ctx.JSON(http.StatusOK, gin.H{
		"command": command,
	})
}
