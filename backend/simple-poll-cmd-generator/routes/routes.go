package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func Setup(templateFolder string, staticFolder string) *gin.Engine {
	router := gin.Default()

	router.LoadHTMLGlob(templateFolder + "/*")
	router.Static("/static", staticFolder)
	router.NoRoute(noRoute)

	return router
}

func noRoute(ctx *gin.Context) {
	ctx.HTML(http.StatusOK, "index.html", gin.H{})
}
