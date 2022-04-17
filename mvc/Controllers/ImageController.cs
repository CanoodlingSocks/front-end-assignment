using Microsoft.AspNetCore.Http;
using Service.Services;
using Microsoft.AspNetCore.Mvc;

namespace mvc.Controllers.API
{
    [Route("api/images")] // Eller ska man köra [Route("api/[controller]")] ??
    [ApiController]
    public class ImagesController : ControllerBase
    {
        public ImageService imageService;

        public ImagesController()
        {
            imageService = ImageService.Instance;
        }

        [HttpGet]
        public IActionResult GetImage()
        {
            return Ok(imageService.GetAll()); //Bruh så man måste wrappa in metoden i return ok grejen och man kan inte ba skriva ut metoden??? BRUH
        }

        [HttpPost]
        public IActionResult UploadImage()
        {
            imageService.Upload(Request.Form.Files[0]);
            return Ok();
        }

       
    }
}