﻿using DAL;
using Microsoft.AspNetCore.Mvc;
using Service.Models;
using Service.Services;

namespace mvc.Controllers
{
    [Route("api/authors")]
    [ApiController]
    public class AuthorController : Controller
    {
        public AuthorService Service;

        public AuthorController()
        {
            Service = AuthorService.Instance;
        }

        [HttpGet]

        public IActionResult GetAuthors()
        {
            return Ok(Service.GetAuthors());
        }

        [HttpGet("{id}")]
        public IActionResult GetAuthor(Guid id)
        {
            return Ok(Service.GetAuthor(id));
        }

        [HttpDelete("{id}")]

        public IActionResult DeleteAuthor(Guid id)
        {

            try
            {
                Service.DeleteAuthor(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public IActionResult CreateAuthor(CreateAuthorDTO authorDTO)
        {
            try
            {
                Service.CreateAuthor(authorDTO);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        [HttpPut("{id}")]
        public IActionResult UpdateAuthor(UpdateAuthorDTO authorDTO)
        {
            try
            {
                Service.UpdateAuthor(authorDTO);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}
