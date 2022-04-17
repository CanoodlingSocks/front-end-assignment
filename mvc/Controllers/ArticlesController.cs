using DAL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Service.Models;
using Service.Services;

namespace mvc.Controllers
{
    [ApiController]
    [Route("api/articles")]
    public class ArticlesController : Controller
    {

        public ArticleService Service;
        //private readonly ExamContext examContext;
     
        public ArticlesController()
        {
            //examContext = new ExamContext();

            Service = ArticleService.Instance;
        }

        [HttpGet]
        public IActionResult GetArticles()
        {
            return Ok(Service.GetAllArticles());
            
        }

        [HttpPost]
        public IActionResult PostArticles(CreateArticleDTO articleDto)
        {
            Service.CreateArticle(articleDto);
            return Ok(); // Vad gör return View(articleDto) för nåt btw?
        }

        // GET /articles/{id}
        [HttpGet("{id}")]
        public IActionResult GetById(Guid id)
        {
            return Ok(Service.GetById(id));
        }

        [HttpPut("{id}")]
        public IActionResult UpdateArticle(UpdateArticleDTO articleDto)
        {
            Service.UpdateArticle(articleDto);
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteArticle(Guid id)
        {
            Service.DeleteArticle(id);
            return Ok();
        }

        // Testar bara för att se om jag kan skapa en form för kommentarer under artiklar
        
        //[HttpPost]
        //public ActionResult Form(CommentDTO com)
        //{
        //    ViewBag.Commentor = com.CommentedBy;
        //    return View("Index");
        //}

    }
}
