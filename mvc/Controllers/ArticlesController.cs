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
            try
            {
                return Ok(Service.GetAllArticles());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            
        }

        [HttpPost]
        public IActionResult PostArticles(CreateArticleDTO articleDto)
        {
            Service.CreateArticle(articleDto);
            return Ok(); // Vad gör return View(articleDto) för nåt btw?
        }

        // GET /articles/{id}
        //Får problem i ReactApp att hitta artiklarna, testar error handling
        [HttpGet("{id}")]
        public IActionResult GetById(Guid id)
        {
            if (id == null)
            {
                return Ok(Service.GetAllArticles());
                //return Ok(Service.GetById(id));
            }
            else
            {
                try
                {
                    return Ok(Service.GetById(id));
                }
                catch (Exception e)
                {
                    return BadRequest(e.Message);
                }
            }
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
