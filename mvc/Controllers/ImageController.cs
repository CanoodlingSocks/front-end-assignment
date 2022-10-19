using Microsoft.AspNetCore.Http;
using Service.Services;
using Microsoft.AspNetCore.Mvc;

namespace mvc.Controllers.API
{
    [Route("api/images")]
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
            return Ok(imageService.GetAll()); 
        }

        [HttpPost]
        public IActionResult UploadImage()
        {
            imageService.Upload(Request.Form.Files[0]);
            return Ok();
        }

       
    }
}