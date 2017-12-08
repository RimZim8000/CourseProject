using ReactAppDataSource.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactAppDataSource.Repositories
{
    public interface IContactsRepository
    {
        Contact Get(string id);
        List<Contact> GetAll();
        void Post(Contact c);
        void Put(string id, Contact c);
        void Delete(string id);
    }
    public class ContactsRepository : IContactsRepository
    {
        //private DocumentClient  
        List<Contact> _contacts;
        public ContactsRepository()
        {
            _contacts = new List<Contact>();
            //{
            //        new Contact{ id="", first_name="", last_name="", email="", subject="", description=""}
            //};
            int count = 10;
            for (int i = 0; i < count; i++)
            {
                string str = "{\"id\":\"" + i.ToString() + "\",";
                str += "\"first_name\":\"first_name" + i.ToString() + "\",";
                str += "\"last_name\":\"last_name" + i.ToString() + "\",";
                str += "\"email\":\"email" + i.ToString() + "@dodo.com\",";
                str += "\"subject\":\"subject" + i.ToString() + ":\",";
                str += "\"description\":\"description" + i.ToString() + " for this contact\"}";
               // if (i < count - 1) str += ",";
                Contact deserializedContact = Newtonsoft.Json.JsonConvert.DeserializeObject<Contact>(str);
                _contacts.Add(deserializedContact);
            }
        }

        public void Delete(string id)
        {
            Contact c = _contacts.Find(x => x.id == id);
            if (c != null) _contacts.Remove(c);
        }

        public Contact Get(string id)
        {
            return _contacts.Find(x => x.id == id);
        }

        public List<Contact> GetAll()
        {
            return _contacts;
        }

        public void Post(Contact c)
        {
            _contacts.Add(c);
        }

        public void Put(string id, Contact c)
        {
            Delete(id);
            Post(c);
        }
    }
}
