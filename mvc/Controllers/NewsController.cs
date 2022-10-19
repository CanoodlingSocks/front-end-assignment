using Microsoft.AspNetCore.Mvc;
using mvc.Models;
using Service.Models;
using Service.Services;
using System.Text.RegularExpressions;

namespace mvc.Controllers
{
    public class NewsController : Controller
    {
        private readonly ILogger<NewsController> _logger;

        //[Route("")]
        //[Route("News/{articleId}")]
        //public IActionResult Index
        public NewsController(ILogger<NewsController> logger)
        {
            _logger = logger;
        }

        //GET /
        public IActionResult StartPage()
        {
            StartPage startPageView = new StartPage
            {
                PinnedArticles = ArticleService.Instance.GetPinnedArticles(),
                ArticleSummary = ArticleService.Instance.GetLatestArticles(5)
            };

            return View(startPageView);
        }

        //GET /ArticlePage
        [HttpGet("[controller]/{urlId}")]
        public IActionResult ArticlePage(string urlId)
        {
            var id = new Regex(           // Regex kod taget från Daniel eller Alex eller vem han nu fick tag på den cuz lord knows im not touching regex
                "^([0-9A-Fa-f]{8}[-]" +
                "[0-9A-Fa-f]{4}[-]" +
                "[0-9A-Fa-f]{4}[-]" +
                "[0-9A-Fa-f]{4}[-]" +
                "[0-9A-Fa-f]{12})");

            Guid articleId = Guid.Parse(id.Match(urlId).Value);

            var articlePageView = ArticleService.Instance.GetById(articleId);
            return View(articlePageView);
        }

        [HttpPost("news/{CreateComment}")]
        public IActionResult CreateComment(string returnUrl, ArticleDTO articleDTO)
        {
            CreateCommentDTO createComment = new CreateCommentDTO()
            {
                CommentedBy = articleDTO.NewComments.CommentedBy,
                Value = articleDTO.NewComments.Value,
                ArticleId = (Guid)articleDTO.Id
            };
            ArticleService.Instance.AddComment(createComment);

            return Redirect(returnUrl);
        }

        //Hinner inte fixa kommentarer men dom sparas iaf varjegång man startar om så???

    }
}
