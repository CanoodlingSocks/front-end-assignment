using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Models
{
    public class CreateCommentDTO
    {
        public string Value { get; set; }

        public string CommentedBy { get; set; }

        public Guid ArticleId { get; set; }
    }
}
