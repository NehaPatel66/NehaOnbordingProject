using NehaOnbordingProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NehaOnbordingProject.Controllers
{
    public class StoreController : Controller
    {
        public OnbordingTalentEntities1 db = new OnbordingTalentEntities1();
        // GET: Store
        public ActionResult Index()
        {
            return View();
        }

        //Get StoresList
        public JsonResult GetStoreList()
        {

            var data = db.Stores.Select(x => new
            {
                Id = x.Id,
                Name = x.Name,
                Address = x.Address
            }).ToList();
            return new JsonResult { Data = data, JsonRequestBehavior = JsonRequestBehavior.AllowGet };

        }
        //Create
        public JsonResult CreateStore(Store c)
        {


            db.Stores.Add(c);
            db.SaveChanges();

            return new JsonResult { Data = "Success", JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }

    }
}
    
