using Service.Models;

namespace mvc.Models
{
    public class StartPage
    {
        public IEnumerable<ArticleSummaryDTO> PinnedArticles { get; set; }
        public IEnumerable<ArticleSummaryDTO> ArticleSummary { get; set; }
    }
}
