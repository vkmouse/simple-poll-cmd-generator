package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func Setup(templateFolder string, staticFolder string) *gin.Engine {
	router := gin.Default()

	router.LoadHTMLGlob(templateFolder + "/*")
	router.Static("/static", staticFolder)
	router.GET("/", homePage)

	return router
}

func homePage(ctx *gin.Context) {
	ctx.HTML(http.StatusOK, "index.html", gin.H{})
}
